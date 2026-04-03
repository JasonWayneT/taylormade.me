import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 overflow-hidden position-relative min-vh-100 d-flex flex-column">
      <div className="bg-blob blob-blue opacity-10" style={{ top: '-10%', left: '0' }}></div>
      <div className="bg-blob blob-yellow opacity-10" style={{ bottom: '-10%', right: '0' }}></div>

      <div className="container my-auto">
        <div className="row g-12 align-items-center">
          <div className="col-lg-6 mb-12 mb-lg-0">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="display-3 fw-bold mb-8">Discuss a <br /><span className="text-gradient">high-intent</span> project.</h1>
              <p className="lead fw-medium mb-10 text-secondary" style={{ maxWidth: '480px' }}>
                I am currently open to high-impact Product Management and Platform Engineering opportunities.
              </p>
              
              <div className="d-flex flex-column gap-6">
                <div>
                  <h4 className="h6 fw-bold text-uppercase mb-2" style={{ letterSpacing: '0.1em' }}>Email</h4>
                  <a href="mailto:jason.taylor@example.com" className="h4 fw-bold nav-link-custom mb-0">jason.taylor@example.com</a>
                </div>
                <div>
                  <h4 className="h6 fw-bold text-uppercase mb-2" style={{ letterSpacing: '0.1em' }}>Social</h4>
                  <div className="d-flex gap-4">
                     <a href="#" className="h4 fw-bold nav-link-custom mb-0">LinkedIn ↗</a>
                     <a href="#" className="h4 fw-bold nav-link-custom mb-0">GitHub ↗</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-5 offset-lg-1">
             <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="card-m3 p-10 shadow-lg border-0"
             >
                <form className="d-flex flex-column gap-6">
                   <div>
                      <label className="form-label small fw-bold text-uppercase text-secondary" style={{ letterSpacing: '0.05em' }}>Full Name</label>
                      <input type="text" className="form-control border-0 py-3 px-4 rounded-xl" placeholder="Alex Rivera" style={{ backgroundColor: 'var(--color-bg-subtle)' }} />
                   </div>
                   <div>
                      <label className="form-label small fw-bold text-uppercase text-secondary" style={{ letterSpacing: '0.05em' }}>Work Email</label>
                      <input type="email" className="form-control border-0 py-3 px-4 rounded-xl" placeholder="alex@company.com" style={{ backgroundColor: 'var(--color-bg-subtle)' }} />
                   </div>
                   <div>
                      <label className="form-label small fw-bold text-uppercase text-secondary" style={{ letterSpacing: '0.05em' }}>Message</label>
                      <textarea className="form-control border-0 py-4 px-4 rounded-xl" rows="4" placeholder="How can I help you scale?" style={{ backgroundColor: 'var(--color-bg-subtle)' }}></textarea>
                   </div>
                   <button type="submit" className="btn btn-primary pill w-100 py-4 fs-5 shadow-lg mt-4">
                      Submit Request ↗
                   </button>
                </form>
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
