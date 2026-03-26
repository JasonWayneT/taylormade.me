import { FiMail, FiLinkedin, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  return (
    <div className="container py-5 my-md-4" style={{ maxWidth: '650px' }}>
      <h1 className="mb-4">Let's Talk</h1>
      <p className="lead mb-5" style={{ color: 'var(--color-text-body)' }}>
        I am open to new Product Management roles focused on AI products, internal tools, or developer platforms. If you're building something interesting, I'd love to chat.
      </p>

      <div className="card border-0 shadow-sm p-4 p-md-5" style={{ backgroundColor: 'var(--color-bg-subtle)', borderRadius: 'var(--border-radius-md)' }}>
        <div className="d-flex flex-column gap-4 gap-md-5">
          <div className="d-flex align-items-center gap-3 gap-md-4">
            <div className="p-3 rounded-circle shadow-sm" style={{ backgroundColor: 'var(--color-bg-main)' }}>
              <FiMail size={24} color="var(--color-action-primary)" />
            </div>
            <div>
              <div className="text-uppercase metric-mono mb-1 text-muted" style={{ fontSize: '0.8rem' }}>Email</div>
              <a href="mailto:taylor@example.com" className="nav-link-custom fw-bold fs-5" style={{ color: 'var(--color-text-header)' }}>taylor@example.com</a>
            </div>
          </div>
          
          <div className="d-flex align-items-center gap-3 gap-md-4">
            <div className="p-3 rounded-circle shadow-sm" style={{ backgroundColor: 'var(--color-bg-main)' }}>
              <FiLinkedin size={24} color="var(--color-action-primary)" />
            </div>
            <div>
              <div className="text-uppercase metric-mono mb-1 text-muted" style={{ fontSize: '0.8rem' }}>LinkedIn</div>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="nav-link-custom fw-bold fs-5" style={{ color: 'var(--color-text-header)' }}>linkedin.com/in/taylormade</a>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3 gap-md-4">
            <div className="p-3 rounded-circle shadow-sm" style={{ backgroundColor: 'var(--color-bg-main)' }}>
              <FiMapPin size={24} color="var(--color-action-primary)" />
            </div>
            <div>
              <div className="text-uppercase metric-mono mb-1 text-muted" style={{ fontSize: '0.8rem' }}>Location</div>
              <div className="fw-bold fs-5" style={{ color: 'var(--color-text-header)' }}>San Francisco / Remote</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
