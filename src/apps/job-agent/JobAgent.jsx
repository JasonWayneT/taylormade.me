import { useState, useRef } from 'react';
import { FiUploadCloud, FiFileText, FiCheckCircle, FiPrinter, FiAlertCircle, FiXCircle, FiTrash2 } from 'react-icons/fi';
import { useReactToPrint } from 'react-to-print';
import * as pdfjsLib from 'pdfjs-dist';
import * as mammoth from 'mammoth';

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

export default function JobAgent() {
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeText, setResumeText] = useState('');
  const [resumeDragOver, setResumeDragOver] = useState(false);

  const [workExperienceFile, setWorkExperienceFile] = useState(null);
  const [workExperienceText, setWorkExperienceText] = useState('');
  const [workExpDragOver, setWorkExpDragOver] = useState(false);
  
  const [pipelineStep, setPipelineStep] = useState(0);
  const [error, setError] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);
  
  const [fitResult, setFitResult] = useState(null);
  const [researchResult, setResearchResult] = useState(null);
  const [draftedResume, setDraftedResume] = useState(null);
  const [draftedCoverLetter, setDraftedCoverLetter] = useState(null);
  const [draftedCheatSheet, setDraftedCheatSheet] = useState(null);

  const resumeRef = useRef();
  const clRef = useRef();
  const cheatRef = useRef();

  const handlePrintResume = useReactToPrint({ contentRef: resumeRef });
  const handlePrintCL = useReactToPrint({ contentRef: clRef });

  const parseFile = async (file, setTextCallback, isResume = false) => {
    if (!file) return;
    const ext = file.name.split('.').pop().toLowerCase();
    let extractedText = null;
    
    try {
      if (ext === 'txt' || ext === 'md') {
        const reader = new FileReader();
        reader.onload = (e) => {
          setTextCallback(e.target.result);
          if (isResume) extractContactInfo(e.target.result);
        };
        reader.readAsText(file);
        return;
      } else if (ext === 'pdf') {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let text = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          text += content.items.map(item => item.str).join(' ') + '\n';
        }
        extractedText = text;
      } else if (ext === 'docx') {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        extractedText = result.value;
      } else {
        alert("Unsupported file type. Please upload PDF, DOCX, TXT, or MD.");
        return;
      }
      if (extractedText) {
        setTextCallback(extractedText);
        if (isResume) extractContactInfo(extractedText);
      }
    } catch (err) {
      console.error("File parse error:", err.message);
      alert("Failed to read file. Please try another format.");
    }
  };

  const extractContactInfo = async (text) => {
    try {
      const res = await fetch('/api/job-agent/extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeText: text })
      });
      const data = await res.json();
      setContactInfo(data);
    } catch (err) {
      console.error('Contact extraction failed:', err.message);
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) { setResumeFile(file); parseFile(file, setResumeText, true); }
  };
  const handleResumeDrop = (e) => {
    e.preventDefault();
    setResumeDragOver(false);
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) { setResumeFile(file); parseFile(file, setResumeText, true); }
  };
  const handleResumeDragOver = (e) => { e.preventDefault(); setResumeDragOver(true); };
  const handleResumeDragLeave = () => setResumeDragOver(false);

  // --- Work Experience dropzone handlers ---
  const handleWorkExpUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) { setWorkExperienceFile(file); parseFile(file, setWorkExperienceText); }
  };
  const handleWorkExpDrop = (e) => {
    e.preventDefault();
    setWorkExpDragOver(false);
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) { setWorkExperienceFile(file); parseFile(file, setWorkExperienceText); }
  };
  const handleWorkExpDragOver = (e) => { e.preventDefault(); setWorkExpDragOver(true); };
  const handleWorkExpDragLeave = () => setWorkExpDragOver(false);

  const clearSession = () => {
    setCompanyName('');
    setJobDescription('');
    setResumeFile(null);
    setResumeText('');
    setResumeDragOver(false);
    setWorkExperienceFile(null);
    setWorkExperienceText('');
    setWorkExpDragOver(false);
    setPipelineStep(0);
    setError(null);
    setFitResult(null);
    setResearchResult(null);
    setDraftedResume(null);
    setDraftedCoverLetter(null);
    setDraftedCheatSheet(null);
    setContactInfo(null);
  };

  const handlePrintCheat = useReactToPrint({ contentRef: cheatRef });

  const isRejected = fitResult && fitResult.Decision === 'NO';
  const isPipelineRunning = pipelineStep > 0 && pipelineStep < 6;

  const handleGenerate = async () => {
    setError(null);
    setFitResult(null);
    setResearchResult(null);
    setDraftedResume(null);
    setDraftedCoverLetter(null);
    setDraftedCheatSheet(null);
    setPipelineStep(1);

    const fullProfile = workExperienceText 
      ? `RESUME:\n${resumeText}\n\nDETAILED WORK EXPERIENCE:\n${workExperienceText}` 
      : resumeText;

    try {
      // Stage 1: Gatekeeper
      const evalRes = await fetch('/api/job-agent/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobDescription, workExperience: fullProfile })
      });
      const evalData = await evalRes.json();
      setFitResult(evalData);

      if (evalData.Decision === 'NO' || evalData.Score < 72) {
        setPipelineStep(6); // Terminal state — rejected, show result, skip pipeline
        return;
      }

      // Stage 2: Research
      setPipelineStep(2);
      const resRes = await fetch('/api/job-agent/research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyName })
      });
      const resData = await resRes.json();
      setResearchResult(resData);

      // Stage 3: Drafting (parallel)
      setPipelineStep(3);
      const [resumeRes, clRes] = await Promise.all([
        fetch('/api/job-agent/draft', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'resume', jobDescription, workExperience: fullProfile, contactInfo })
        }),
        fetch('/api/job-agent/draft', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'cover_letter', jobDescription, workExperience: fullProfile, researchData: resData, contactInfo })
        })
      ]);

      const resumeData = await resumeRes.json();
      const clData = await clRes.json();

      // Stage 4: Auditing (parallel)
      setPipelineStep(4);
      const [auditResumeRes, auditClRes] = await Promise.all([
        fetch('/api/job-agent/audit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ draftText: resumeData.draft, workExperience: fullProfile })
        }),
        fetch('/api/job-agent/audit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ draftText: clData.draft, workExperience: fullProfile })
        })
      ]);

      const auditedResumeData = await auditResumeRes.json();
      const auditedClData = await auditClRes.json();

      setDraftedResume(auditedResumeData.auditedDraft);
      setDraftedCoverLetter(auditedClData.auditedDraft);

      // Stage 5: Interview Cheat Sheet generation + audit
      setPipelineStep(5);
      const interviewRes = await fetch('/api/job-agent/interview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobDescription,
          workExperience: fullProfile,
          researchData: resData,
          companyName,
          contactInfo
        })
      });
      const interviewData = await interviewRes.json();

      const auditInterviewRes = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ draftText: interviewData.draft, workExperience: fullProfile })
      });
      const auditedInterviewData = await auditInterviewRes.json();
      setDraftedCheatSheet(auditedInterviewData.auditedDraft);

      setPipelineStep(6); // Done
    } catch (err) {
      console.error(err);
      setError("An error occurred during the pipeline. Check console for details.");
      setPipelineStep(0);
    }
  };

  const dropzoneStyle = (dragOver) => ({
    border: `1px dashed ${dragOver ? 'var(--color-primary)' : 'var(--color-border-subtle)'}`,
    backgroundColor: dragOver ? 'rgba(2, 6, 23, 0.05)' : 'var(--color-bg-subtle)',
    transition: 'var(--transition-smooth)',
    cursor: 'pointer',
  });

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="fw-bold mb-3" style={{ color: 'var(--color-text-header)' }}>
            JobAgent <span className="badge bg-primary fs-6 position-relative" style={{ top: '-4px' }}>Beta</span>
          </h1>
          <p className="lead mb-3" style={{ color: 'var(--color-text-body)' }}>
            Upload your resume, paste a Job Description, and let the 5-stage pipeline generate a tailored Resume, Cover Letter, and Interview Cheat Sheet.
          </p>
          {(resumeText || jobDescription || draftedResume) && (
            <button
              id="clear-session-btn"
              className="btn btn-sm btn-outline-danger"
              onClick={clearSession}
              title="Wipe all uploaded data and results from this session"
            >
              <FiTrash2 className="me-2" size={14} />
              Clear Session
            </button>
          )}
        </div>
      </div>

      <div className="row justify-content-center">
        {/* Input Form Column */}
        <div className="col-lg-5 mb-4">
          <div className="card h-100" style={{ backgroundColor: 'var(--color-bg-main)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)' }}>
            <div className="card-body p-4 p-md-5">
              
              <div className="mb-4">
                <label className="form-label fw-bold" style={{ color: 'var(--color-text-header)' }}>1. Company Name</label>
                <input 
                  id="company-name-input"
                  type="text" 
                  className="form-control bg-transparent" 
                  style={{ border: '1px solid var(--color-border-subtle)', color: 'var(--color-text-body)' }}
                  placeholder="e.g. Acme Corp"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-bold" style={{ color: 'var(--color-text-header)' }}>2. Job Description</label>
                <textarea 
                  id="job-description-input"
                  className="form-control bg-transparent" 
                  rows="6" 
                  placeholder="Paste the full job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  style={{ border: '1px solid var(--color-border-subtle)', color: 'var(--color-text-body)' }}
                />
              </div>

              {/* Resume Dropzone */}
              <div className="mb-4">
                <label className="form-label fw-bold" style={{ color: 'var(--color-text-header)' }}>3. Resume <span style={{ color: '#EF4444' }}>*</span></label>
                <div 
                  id="resume-dropzone"
                  className="p-4 text-center rounded position-relative mb-2"
                  style={dropzoneStyle(resumeDragOver)}
                  onDragOver={handleResumeDragOver}
                  onDragLeave={handleResumeDragLeave}
                  onDrop={handleResumeDrop}
                >
                  <input 
                    id="resume-file-input"
                    type="file" 
                    className="position-absolute top-0 start-0 w-100 h-100 opacity-0" 
                    style={{ cursor: 'pointer' }}
                    onChange={handleResumeUpload}
                    accept=".txt,.md,.pdf,.docx"
                  />
                  {resumeFile ? (
                    <div>
                      <FiFileText size={24} color="var(--color-action-primary)" className="mb-2" />
                      <p className="mb-0 fw-bold" style={{ color: 'var(--color-text-header)' }}>{resumeFile.name}</p>
                    </div>
                  ) : (
                    <div>
                      <FiUploadCloud size={24} color={resumeDragOver ? 'var(--color-action-primary)' : 'var(--color-text-body)'} className="mb-2" />
                      <p className="mb-0 fw-bold" style={{ color: resumeDragOver ? 'var(--color-action-primary)' : 'var(--color-text-body)' }}>
                        {resumeDragOver ? 'Drop to upload' : 'Drag & drop or click — PDF, DOCX, TXT'}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Work Experience Dropzone */}
              <div className="mb-4">
                <label className="form-label fw-bold" style={{ color: 'var(--color-text-header)' }}>4. Detailed Work Experience <span className="fw-normal" style={{ color: 'var(--color-text-body)' }}>(Optional)</span></label>
                <p className="small mb-2" style={{ color: 'var(--color-text-body)' }}>Upload an extended master document of all your wins to get a more personalized mapping.</p>
                <div 
                  id="workexp-dropzone"
                  className="p-4 text-center rounded position-relative"
                  style={dropzoneStyle(workExpDragOver)}
                  onDragOver={handleWorkExpDragOver}
                  onDragLeave={handleWorkExpDragLeave}
                  onDrop={handleWorkExpDrop}
                >
                  <input 
                    id="workexp-file-input"
                    type="file" 
                    className="position-absolute top-0 start-0 w-100 h-100 opacity-0" 
                    style={{ cursor: 'pointer' }}
                    onChange={handleWorkExpUpload}
                    accept=".txt,.md,.pdf,.docx"
                  />
                  {workExperienceFile ? (
                    <div>
                      <FiFileText size={24} color="var(--color-action-primary)" className="mb-2" />
                      <p className="mb-0 fw-bold" style={{ color: 'var(--color-text-header)' }}>{workExperienceFile.name}</p>
                    </div>
                  ) : (
                    <div>
                      <FiUploadCloud size={24} color={workExpDragOver ? 'var(--color-action-primary)' : 'var(--color-text-body)'} className="mb-2" />
                      <p className="mb-0 fw-bold" style={{ color: workExpDragOver ? 'var(--color-action-primary)' : 'var(--color-text-body)' }}>
                        {workExpDragOver ? 'Drop to upload' : 'Drag & drop or click — PDF, DOCX, TXT'}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <button 
                id="run-automation-btn"
                className="btn btn-primary w-100 py-3 fw-bold mt-2"
                onClick={handleGenerate}
                disabled={!companyName || !jobDescription || !resumeText || isPipelineRunning}
              >
                {isPipelineRunning ? 'Processing...' : 'Run Automation'}
              </button>

              {error && (
                <div className="alert alert-danger mt-3 d-flex align-items-start gap-2">
                  <FiAlertCircle style={{ flexShrink: 0, marginTop: '2px' }} />
                  {error}
                </div>
              )}

              <p className="mt-4 mb-0 small text-center" style={{ color: 'var(--color-text-body)', opacity: 0.6 }}>
                Your data is never stored. All processing is stateless and ephemeral.
                Resume and JD text is transmitted to Google Gemini API for inference only.
                <a
                  href="https://ai.google.dev/gemini-api/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-1"
                  style={{ color: 'var(--color-action-primary)' }}
                >
                  Google API Terms
                </a>
              </p>
              
            </div>
          </div>
        </div>

        {/* Pipeline / Results Column */}
        <div className="col-lg-7 mb-4">
          <div className="card h-100" style={{ backgroundColor: 'var(--color-bg-main)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)' }}>
            <div className="card-body p-4 p-md-5">
              <h4 className="fw-bold mb-4" style={{ color: 'var(--color-text-header)' }}>Pipeline Status</h4>
              
              {pipelineStep === 0 && <p style={{ color: 'var(--color-text-body)' }}>Waiting to start...</p>}

              {pipelineStep > 0 && (
                <ul className="list-unstyled mb-4">
                  {/* Stage 1 */}
                  <li className="d-flex align-items-center mb-3">
                    {isRejected
                      ? <FiXCircle color="#EF4444" className="me-3" size={20} />
                      : pipelineStep > 1
                        ? <FiCheckCircle color="var(--color-text-header)" className="me-3" size={20} />
                        : <span className="spinner-border spinner-border-sm me-3" style={{ color: 'var(--color-primary)' }} />
                    }
                    <span className={pipelineStep > 1 ? 'fw-bold' : ''} style={{ color: pipelineStep > 1 ? 'var(--color-text-header)' : 'var(--color-text-body)' }}>
                      Stage 1: Gatekeeper Evaluation
                    </span>
                  </li>

                  {/* Stage 2 — only show if passed gate */}
                  {!isRejected && pipelineStep > 1 && (
                    <li className="d-flex align-items-center mb-3">
                      {pipelineStep > 2
                        ? <FiCheckCircle color="var(--color-text-header)" className="me-3" size={20} />
                        : <span className="spinner-border spinner-border-sm me-3" style={{ color: 'var(--color-primary)' }} />
                      }
                      <span className={pipelineStep > 2 ? 'fw-bold' : ''} style={{ color: pipelineStep > 2 ? 'var(--color-text-header)' : 'var(--color-text-body)' }}>
                        Stage 2: Company Intelligence Gathering
                      </span>
                    </li>
                  )}

                  {!isRejected && pipelineStep > 2 && (
                    <li className="d-flex align-items-center mb-3">
                      {pipelineStep > 3
                        ? <FiCheckCircle color="var(--color-text-header)" className="me-3" size={20} />
                        : <span className="spinner-border spinner-border-sm me-3" style={{ color: 'var(--color-primary)' }} />
                      }
                      <span className={pipelineStep > 3 ? 'fw-bold' : ''} style={{ color: pipelineStep > 3 ? 'var(--color-text-header)' : 'var(--color-text-body)' }}>
                        Stage 3: Resume &amp; Cover Letter Drafting
                      </span>
                    </li>
                  )}

                  {!isRejected && pipelineStep > 3 && (
                    <li className="d-flex align-items-center mb-3">
                      {pipelineStep > 4
                        ? <FiCheckCircle color="var(--color-text-header)" className="me-3" size={20} />
                        : <span className="spinner-border spinner-border-sm me-3" style={{ color: 'var(--color-primary)' }} />
                      }
                      <span className={pipelineStep > 4 ? 'fw-bold' : ''} style={{ color: pipelineStep > 4 ? 'var(--color-text-header)' : 'var(--color-text-body)' }}>
                        Stage 4: Cynical Auditor — Claim Verification
                      </span>
                    </li>
                  )}

                  {!isRejected && pipelineStep > 4 && (
                    <li className="d-flex align-items-center mb-3">
                      {pipelineStep > 5
                        ? <FiCheckCircle color="var(--color-text-header)" className="me-3" size={20} />
                        : <span className="spinner-border spinner-border-sm me-3" style={{ color: 'var(--color-primary)' }} />
                      }
                      <span className={pipelineStep > 5 ? 'fw-bold' : ''} style={{ color: pipelineStep > 5 ? 'var(--color-text-header)' : 'var(--color-text-body)' }}>
                        Stage 5: Interview Cheat Sheet — Generation &amp; Audit
                      </span>
                    </li>
                  )}
                </ul>
              )}

              {/* === REJECTION BANNER === */}
              {isRejected && fitResult && (
                <div
                  id="rejection-banner"
                  className="p-4 mb-4"
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.07)',
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                    borderLeft: '4px solid #EF4444',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <FiXCircle color="#EF4444" size={20} />
                    <h5 className="fw-bold mb-0" style={{ color: '#EF4444' }}>
                      Pipeline Halted — Not a Fit (Score: {fitResult.Score}/100)
                    </h5>
                  </div>
                  <p className="mb-3" style={{ color: 'var(--color-text-body)' }}>{fitResult.Summary}</p>

                  {fitResult.RiskFlags && fitResult.RiskFlags.length > 0 && (
                    <div>
                      <p className="fw-bold mb-1 small" style={{ color: 'var(--color-text-header)' }}>Risk Flags:</p>
                      <ul className="mb-0 ps-3">
                        {fitResult.RiskFlags.map((flag, i) => (
                          <li key={i} className="small" style={{ color: 'var(--color-text-body)' }}>{flag}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* === PASS RESULT PANEL === */}
              {fitResult && !isRejected && (
                <div
                  id="fit-result-panel"
                  className="p-4 mb-4"
                  style={{
                    backgroundColor: 'var(--color-bg-subtle)',
                    border: '1px solid var(--color-border-subtle)',
                    borderLeft: '4px solid var(--color-action-primary)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <h5 className="fw-bold" style={{ color: 'var(--color-text-header)' }}>
                    Fit Decision: {fitResult.Decision} — Score: {fitResult.Score}/100
                  </h5>
                  <p className="mb-0" style={{ color: 'var(--color-text-body)' }}>{fitResult.Summary}</p>
                </div>
              )}

              {/* === OUTPUT ASSETS === */}
              {pipelineStep === 6 && draftedResume && (
                <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
                  <h4 className="fw-bold mb-3 d-flex justify-content-between align-items-center" style={{ color: 'var(--color-text-header)' }}>
                    Tailored Resume
                    <button id="print-resume-btn" className="btn btn-primary btn-sm" onClick={handlePrintResume}>
                      <FiPrinter className="me-2" />Print PDF
                    </button>
                  </h4>
                  <div
                    className="p-4 bg-white"
                    style={{ border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', WebkitPrintColorAdjust: 'exact', color: '#000' }}
                    ref={resumeRef}
                  >
                    <div dangerouslySetInnerHTML={{ __html: draftedResume }} />
                  </div>

                  <h4 className="fw-bold mb-3 mt-5 d-flex justify-content-between align-items-center" style={{ color: 'var(--color-text-header)' }}>
                    Cover Letter
                    <button id="print-cl-btn" className="btn btn-primary btn-sm" onClick={handlePrintCL}>
                      <FiPrinter className="me-2" />Print PDF
                    </button>
                  </h4>
                  <div
                    className="p-4 bg-white"
                    style={{ border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', WebkitPrintColorAdjust: 'exact', color: '#000' }}
                    ref={clRef}
                  >
                    <div dangerouslySetInnerHTML={{ __html: draftedCoverLetter }} />
                  </div>

                  {draftedCheatSheet && (
                    <>
                      <h4 className="fw-bold mb-3 mt-5 d-flex justify-content-between align-items-center" style={{ color: 'var(--color-text-header)' }}>
                        Interview Cheat Sheet
                        <button id="print-cheat-btn" className="btn btn-primary btn-sm" onClick={handlePrintCheat}>
                          <FiPrinter className="me-2" />Print PDF
                        </button>
                      </h4>
                      <div
                        className="p-4 bg-white"
                        style={{ border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', WebkitPrintColorAdjust: 'exact', color: '#000' }}
                        ref={cheatRef}
                      >
                        <div dangerouslySetInnerHTML={{ __html: draftedCheatSheet }} />
                      </div>
                    </>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
