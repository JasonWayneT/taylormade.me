import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function CaseStudy() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container py-32 text-center">
        <h2 className="display-4 fw-bold">Project not found</h2>
        <Link to="/work" className="btn btn-primary mt-8 pill px-8 py-3">Back to Work</Link>
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32"
    >
      <div className="container py-section" style={{ maxWidth: '900px' }}>
        <Link to="/work" className="btn btn-link text-decoration-none fw-bold p-0 mb-16 text-secondary" style={{ letterSpacing: '0.05em' }}>
          ← Back to Projects
        </Link>
        
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="display-2 fw-bold mb-8"
          >
            {project.title}
          </motion.h1>
          <p className="h4 fw-medium text-secondary mb-10 max-readable" style={{ lineHeight: '1.6' }}>
            {project.summary}
          </p>
          
          {project.liveUrl && (
            <div className="mb-16">
               {project.liveUrl.startsWith('http') ? (
                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary pill px-8 py-3 fs-5 shadow-sm">
                   Visit Live Project ↗
                 </a>
               ) : (
                 <Link to={project.liveUrl} className="btn btn-primary pill px-8 py-3 fs-5 shadow-sm">
                   Launch Project App →
                 </Link>
               )}
            </div>
          )}
          
          <div className="row g-10 mt-12 pt-10 border-top">
            <div className="col-sm-6 col-md-4">
                <div className="small text-uppercase fw-bold text-muted mb-2" style={{ letterSpacing: '0.1em' }}>Role</div>
                <div className="fw-bold fs-5">{project.role}</div>
            </div>
            <div className="col-sm-6 col-md-4">
                <div className="small text-uppercase fw-bold text-muted mb-2" style={{ letterSpacing: '0.1em' }}>Industry</div>
                <div className="fw-bold fs-5">{project.type}</div>
            </div>
          </div>
        </header>

        <section className="mb-24">
          <h2 className="display-6 fw-bold mb-8">Context & Problem</h2>
          <p className="fs-5 text-secondary" style={{ lineHeight: '1.8' }}>{project.context}</p>
        </section>

        <section className="mb-24">
          <h2 className="display-6 fw-bold mb-8">Goals & Constraints</h2>
          <ul className="list-unstyled d-flex flex-column gap-6 mb-0">
            {project.goals.map((g, i) => (
              <li key={i} className="d-flex align-items-start gap-4 fs-5 text-secondary">
                <span className="mt-3" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-secondary)', flexShrink: 0 }}></span>
                <span style={{ lineHeight: '1.7' }}>{g}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-24">
          <h2 className="display-6 fw-bold mb-8">Approach & Design</h2>
          <p className="fs-5 text-secondary" style={{ lineHeight: '1.8' }}>{project.approach}</p>
        </section>

        <section className="mb-24 py-12 border-top border-bottom">
          <h2 className="display-6 fw-bold mb-8">Results & Impact</h2>
          <p className="mb-0 display-6 fw-bold" style={{ lineHeight: '1.4', color: 'var(--color-primary)' }}>{project.results}</p>
        </section>

        <section className="mb-24">
          <h2 className="display-6 fw-bold mb-8">Executive Takeaways</h2>
          <ul className="list-unstyled d-flex flex-column gap-8 mb-0">
            {project.learnings.map((l, i) => (
              <li key={i} className="d-flex align-items-start gap-4">
                <span className="fs-4 text-secondary fw-bold" style={{ opacity: 0.3 }}>0{i+1}</span>
                <p className="mb-0 fs-5 fw-medium text-secondary" style={{ lineHeight: '1.7' }}>{l}</p>
              </li>
            ))}
          </ul>
        </section>

        <footer className="text-center py-20 mt-10 border-top">
          <h3 className="display-6 fw-bold mb-8">Interested in the details?</h3>
          <div className="d-flex justify-content-center gap-4">
            <Link to="/contact" className="btn btn-primary pill px-8 py-3 fs-5">Discuss Project</Link>
            {project.liveUrl && (
              project.liveUrl.startsWith('http') ? (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary pill px-8 py-3 fs-5">
                   Live Demo ↗
                </a>
              ) : (
                <Link to={project.liveUrl} className="btn btn-outline-primary pill px-8 py-3 fs-5">
                   Launch App →
                </Link>
              )
            )}
          </div>
        </footer>
      </div>
    </motion.article>
  );
}
