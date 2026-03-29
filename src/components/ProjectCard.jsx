import { Link } from 'react-router-dom';

export default function ProjectCard({ id, title, summary, role, type, tags, liveUrl }) {
  return (
    <div className="card h-100 border-0 shadow-sm project-card-hover" style={{ backgroundColor: 'var(--color-bg-main)', border: '1px solid var(--color-border-subtle) !important', borderRadius: 'var(--border-radius-md)', transition: 'transform 0.2s ease-in-out' }}>
      <div className="card-body p-4 d-flex flex-column">
        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="badge" style={{ backgroundColor: 'var(--color-bg-tertiary)', color: 'var(--color-text-body)' }}>{role}</span>
          <span className="badge" style={{ backgroundColor: 'var(--color-bg-tertiary)', color: 'var(--color-text-body)' }}>{type}</span>
        </div>
        <h3 className="h4 mb-2" style={{ color: 'var(--color-text-header)' }}>{title}</h3>
        <p className="mb-4" style={{ color: 'var(--color-text-body)' }}>{summary}</p>
        
        <div className="mt-auto">
          <div className="d-flex flex-wrap gap-2 mb-4 pb-2 border-bottom" style={{ borderColor: 'var(--color-border-subtle) !important' }}>
            {tags.map(tag => (
              <span key={tag} className="metric-mono text-muted" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>#{tag.toUpperCase()}</span>
            ))}
          </div>
          <div className="d-flex flex-column flex-sm-row gap-2">
            <Link to={`/case-study/${id}`} className="btn btn-outline-primary flex-grow-1 fw-bold">
              View Case Study
            </Link>
            {liveUrl && (
              <Link to={liveUrl} className="btn btn-primary flex-grow-1 fw-bold">
                Try it out
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
