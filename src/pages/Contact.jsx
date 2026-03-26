import { FiMail, FiLinkedin, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  return (
    <div className="container py-5 my-md-4" style={{ maxWidth: '650px' }}>
      <h1 className="mb-4">Let's Talk</h1>
      <p className="lead mb-5" style={{ color: 'var(--color-text-body)' }}>
        I am actively seeking Product Management roles focused on AI systems, data platforms, or structurally complex B2B products. If you need a PM who can bring order to technical chaos, I'd love to chat.
      </p>

      <div className="card border-0 shadow-sm p-4 p-md-5" style={{ backgroundColor: 'var(--color-bg-subtle)', borderRadius: 'var(--border-radius-md)' }}>
        <div className="d-flex flex-column gap-4 gap-md-5">
          <div className="d-flex align-items-center gap-3 gap-md-4">
            <div className="p-3 rounded-circle shadow-sm" style={{ backgroundColor: 'var(--color-bg-main)' }}>
              <FiMail size={24} color="var(--color-action-primary)" />
            </div>
            <div>
              <div className="text-uppercase metric-mono mb-1 text-muted" style={{ fontSize: '0.8rem' }}>Email</div>
              <a href="mailto:Jason.Wayne.T@gmail.com" className="nav-link-custom fw-bold fs-5" style={{ color: 'var(--color-text-header)' }}>Jason.Wayne.T@gmail.com</a>
            </div>
          </div>
          
          <div className="d-flex align-items-center gap-3 gap-md-4">
            <div className="p-3 rounded-circle shadow-sm" style={{ backgroundColor: 'var(--color-bg-main)' }}>
              <FiLinkedin size={24} color="var(--color-action-primary)" />
            </div>
            <div>
              <div className="text-uppercase metric-mono mb-1 text-muted" style={{ fontSize: '0.8rem' }}>LinkedIn</div>
              <a href="https://www.linkedin.com/in/jasonwaynetaylor/" target="_blank" rel="noreferrer" className="nav-link-custom fw-bold fs-5" style={{ color: 'var(--color-text-header)' }}>linkedin.com/in/jasonwaynetaylor</a>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3 gap-md-4">
            <div className="p-3 rounded-circle shadow-sm" style={{ backgroundColor: 'var(--color-bg-main)' }}>
              <FiMapPin size={24} color="var(--color-action-primary)" />
            </div>
            <div>
              <div className="text-uppercase metric-mono mb-1 text-muted" style={{ fontSize: '0.8rem' }}>Location</div>
              <div className="fw-bold fs-5" style={{ color: 'var(--color-text-header)' }}>San Diego, CA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
