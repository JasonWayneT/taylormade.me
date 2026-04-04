import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-10 overflow-hidden position-relative">
      <div className="bg-blob blob-yellow" style={{ top: '20%', left: '-10%', opacity: '0.07' }}></div>
      
      <section className="container py-section">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="display-2 fw-bold mb-8">Building foundation, <br /><span className="text-gradient">not just features.</span></h1>
              <p className="h4 fw-medium mb-0 max-readable" style={{ color: 'var(--color-primary)', lineHeight: '1.6' }}>
                I am a Product Manager with 6+ years of experience in B2B SaaS, specializing in complex platform transformations and AI data integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="row g-12 justify-content-center">
          <div className="col-lg-7">
            <div className="mb-16">
              <h3 className="h6 fw-bold text-uppercase mb-8" style={{ letterSpacing: '0.15em', color: 'var(--color-secondary)' }}>Philosophy</h3>
              <p className="fs-5 text-secondary mb-8" style={{ lineHeight: '1.8' }}>
                Most platforms fail because the foundation is ignored in favor of the finish line. 
                I focus on the reverse—engineering the robust data pipelines, platform stability, 
                and infrastructure integrity required to support sustainable innovation.
              </p>
              <p className="fs-5 text-secondary mb-0" style={{ lineHeight: '1.8' }}>
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
             <div className="d-flex flex-column gap-6">
                <div className="p-8 rounded-xl border border-light shadow-sm" style={{ backgroundColor: 'var(--color-bg-subtle)' }}>
                   <div className="h6 fw-bold text-uppercase mb-4 text-secondary" style={{ letterSpacing: '0.1em' }}>Current Role</div>
                   <div className="fw-bold fs-4">Principal Platform Consultant</div>
                </div>
                
                <div className="p-8 rounded-xl border border-light shadow-sm" style={{ backgroundColor: 'var(--color-bg-subtle)' }}>
                   <div className="h6 fw-bold text-uppercase mb-4 text-secondary" style={{ letterSpacing: '0.1em' }}>Previously</div>
                   <div className="fw-bold fs-4">Senior Product Manager • Cision</div>
                </div>

                <div className="p-8 rounded-xl border border-light shadow-sm" style={{ backgroundColor: 'var(--color-bg-subtle)' }}>
                   <div className="h6 fw-bold text-uppercase mb-4 text-secondary" style={{ letterSpacing: '0.1em' }}>Core Expertise</div>
                   <div className="d-flex flex-wrap gap-3 mt-2">
                      <span className="badge bg-white text-dark border-0 shadow-sm px-4 py-2 rounded-pill fw-bold" style={{ fontSize: '0.8rem' }}>SaaS</span>
                      <span className="badge bg-white text-dark border-0 shadow-sm px-4 py-2 rounded-pill fw-bold" style={{ fontSize: '0.8rem' }}>B2B</span>
                      <span className="badge bg-white text-dark border-0 shadow-sm px-4 py-2 rounded-pill fw-bold" style={{ fontSize: '0.8rem' }}>Enterprise</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
