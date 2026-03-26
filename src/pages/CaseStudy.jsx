import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function CaseStudy() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container py-5 my-5 text-center">
        <h2>Project not found</h2>
        <Link to="/work" className="btn btn-primary mt-4">Back to Work</Link>
      </div>
    );
  }

  return (
    <article className="container py-5 my-md-4" style={{ maxWidth: '800px' }}>
      <Link to="/work" className="nav-link-custom d-inline-block mb-5">← Back to Projects</Link>
      
      <div className="mb-5 pb-5 border-bottom" style={{ borderColor: 'var(--color-border-subtle) !important' }}>
        <h1 className="mb-3">{project.title}</h1>
        <p className="lead mb-4" style={{ color: 'var(--color-text-body)' }}>{project.summary}</p>
        <div className="d-flex flex-wrap gap-4 mt-5 p-4 rounded" style={{ backgroundColor: 'var(--color-bg-subtle)' }}>
          <div>
            <div className="text-uppercase metric-mono mb-1 text-muted" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>Role</div>
            <div className="fw-bold">{project.role}</div>
          </div>
          <div>
            <div className="text-uppercase metric-mono mb-1 text-muted" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>Type</div>
            <div className="fw-bold">{project.type}</div>
          </div>
        </div>
      </div>

      <section className="mb-5">
        <h2 className="h3 mb-3">Context & Problem</h2>
        <p style={{ color: 'var(--color-text-body)' }}>{project.context}</p>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-3">Goals & Constraints</h2>
        <ul className="mb-0" style={{ color: 'var(--color-text-body)' }}>
          {project.goals.map((g, i) => <li key={i} className="mb-2">{g}</li>)}
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-3">Approach & AI Design</h2>
        <p style={{ color: 'var(--color-text-body)' }}>{project.approach}</p>
      </section>

      <section className="mb-5 p-4 rounded" style={{ border: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-bg-main)' }}>
        <h2 className="h3 mb-3" style={{ color: 'var(--color-text-header)' }}>Results & Impact</h2>
        <p className="mb-0 fs-5 fw-medium" style={{ color: 'var(--color-text-body)' }}>{project.results}</p>
      </section>

      <section className="mb-5 pb-5 border-bottom" style={{ borderColor: 'var(--color-border-subtle) !important' }}>
        <h2 className="h3 mb-3">Learnings</h2>
        <ul className="mb-0" style={{ color: 'var(--color-text-body)' }}>
          {project.learnings.map((l, i) => <li key={i} className="mb-2">{l}</li>)}
        </ul>
      </section>

      <div className="text-center py-4">
        <h3 className="h4 mb-4">Want to discuss this project?</h3>
        <Link to="/contact" className="btn btn-primary px-4 py-2">Let's talk</Link>
      </div>
    </article>
  );
}
