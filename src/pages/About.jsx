import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-32 pb-20 overflow-hidden position-relative">
      <div className="bg-blob blob-yellow opacity-10" style={{ top: '20%', left: '-10%' }}></div>
      
      <section className="container mb-20">
        <div className="row">
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="display-3 fw-bold mb-8">Building foundation, <br /><span className="text-gradient">not just features.</span></h1>
              <p className="lead fw-medium mb-12" style={{ color: 'var(--color-primary)', fontSize: '1.5rem', lineHeight: '1.4' }}>
                I am a Product Manager with 6+ years of experience in B2B SaaS, specializing in complex platform transformations and AI data integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row g-12">
          <div className="col-lg-7">
            <div className="mb-12">
              <h3 className="h5 fw-bold text-uppercase mb-6" style={{ letterSpacing: '0.1em', color: 'var(--color-secondary)' }}>Philosophy</h3>
              <p className="fs-5 text-secondary mb-6">
                Most platforms fail because the foundation is ignored in favor of the finish line. 
                I focus on the reverse—engineering the robust data pipelines, platform stability, 
                and infrastructure integrity required to support sustainable innovation.
              </p>
              <p className="fs-5 text-secondary mb-0">
                Whether stabilizing a $40M ARR enterprise suite or architecting zero-hallucination 
                AI workflows, my goal is to build high-trust systems that allow businesses to scale without fear.
              </p>
            </div>

            <div className="row g-6 mb-12">
               <div className="col-sm-6">
                  <div className="card-m3 h-100 p-6">
                     <h4 className="h5 fw-bold mb-3">Platform Scalability</h4>
                     <p className="text-secondary small mb-0">Experience in high-availability systems with tight SLA requirements.</p>
                  </div>
               </div>
               <div className="col-sm-6">
                  <div className="card-m3 h-100 p-6">
                     <h4 className="h5 fw-bold mb-3">AI Integrity</h4>
                     <p className="text-secondary small mb-0">Focus on verifiable, high-fidelity data pipelines for LLM usage.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="col-lg-4 offset-lg-1">
             <div className="p-8 rounded-xl" style={{ backgroundColor: 'var(--color-bg-subtle)', border: '1px solid var(--color-border-subtle)' }}>
                <h3 className="h5 fw-bold mb-6">Experience Snapshot</h3>
                <div className="d-flex flex-column gap-4">
                   <div>
                      <span className="small text-muted d-block mb-1">Current</span>
                      <span className="fw-bold">Principal Platform Consultant</span>
                   </div>
                   <hr className="my-2" />
                   <div>
                      <span className="small text-muted d-block mb-1">Previous</span>
                      <span className="fw-bold">Senior Product Manager • Cision</span>
                   </div>
                   <hr className="my-2" />
                   <div>
                      <span className="small text-muted d-block mb-1">Expertise</span>
                      <div className="d-flex flex-wrap gap-2 mt-2">
                         <span className="badge bg-white text-dark border p-2">SaaS</span>
                         <span className="badge bg-white text-dark border p-2">B2B</span>
                         <span className="badge bg-white text-dark border p-2">Data Science</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
