import { motion } from 'framer-motion';
import { platforms } from '../data/platforms';

export default function PlatformShowcase() {
  return (
    <section className="py-section overflow-hidden">
      <div className="container">
        <div className="mb-20 text-center">
           <span className="text-secondary fw-bold text-uppercase small mb-3 d-block" style={{ letterSpacing: '0.15em' }}>
              System Pedigree
           </span>
           <h2 className="display-4 fw-bold">Platforms & Systems</h2>
        </div>

        <div className="d-flex flex-column gap-32">
          {platforms.map((platform, index) => (
            <div key={platform.id} className={`row g-12 align-items-center ${index % 2 === 1 ? 'flex-md-row-reverse' : ''}`}>
              <div className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="mb-8">
                     <span className="badge bg-secondary-soft text-dark px-4 py-2 rounded-pill fw-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                        {platform.role} • {platform.company}
                     </span>
                     <h3 className="display-5 fw-bold mb-6">{platform.name}</h3>
                     <p className="fs-5 text-secondary mb-10 max-readable" style={{ lineHeight: '1.8' }}>
                        {platform.description}
                     </p>
                  </div>

                  <div className="row g-4">
                    {platform.keyMetrics.map((metric, mIdx) => (
                      <div key={mIdx} className="col-6 col-sm-4">
                        <div className="p-6 rounded-xl border border-light" style={{ backgroundColor: 'var(--color-bg-subtle)' }}>
                           <div className="small text-muted mb-1">{metric.label}</div>
                           <div className="fw-bold fs-5">{metric.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="position-relative"
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl border" style={{ borderColor: 'var(--color-border-subtle)' }}>
                    <img 
                      src={platform.id === 'cision-c3' ? platform.images.coverage : platform.images.hero} 
                      alt={platform.name} 
                      className="img-fluid w-100 object-fit-cover"
                      style={{ maxHeight: '450px' }}
                    />
                  </div>
                  
                  {/* Decorative element */}
                  <div 
                    className="position-absolute d-none d-md-block" 
                    style={{ 
                      bottom: '-20px', 
                      [index % 2 === 0 ? 'right' : 'left']: '-20px',
                      zIndex: -1,
                      width: '100px',
                      height: '100px',
                      background: 'var(--color-secondary-soft)',
                      borderRadius: 'var(--radius-xl)'
                    }} 
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
