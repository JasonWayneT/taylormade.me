import { Link } from 'react-router-dom';

export default function ProjectCard({ id, title, summary, role, type, tags }) {
  return (
    <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: 'var(--color-bg-main)', border: '1px solid var(--color-border-subtle) !important', borderRadius: 'var(--border-radius-md)' }}>
      <div className="card-body p-4 d-flex flex-column">
        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="badge" style={{ backgroundColor: 'var(--color-bg-tertiary)', color: 'var(--color-text-body)' }}>{role}</span>
          <span className="badge" style={{ backgroundColor: 'var(--color-bg-tertiary)', color: 'var(--color-text-body)' }}>{type}</span>
        </div>
        <h3 className="h4 mb-2">{title}</h3>
        <p className="mb-4">{summary}</p>
        
        <div className="mt-auto">
          <div className="d-flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
              <span key={tag} className="metric-mono text-muted" style={{ fontSize: '0.85rem' }}>#{tag}</span>
            ))}
          </div>
          <Link to={`/case-study/${id}`} className="btn btn-primary" style={{ transition: 'var(--transition-fast)' }}>
            View Case Study
          </Link>
        </div>
      </div>
    </div>
  );
}
