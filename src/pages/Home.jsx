import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <div>
      <section className="py-5 my-md-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-8">
              <h1 className="display-4 fw-bold mb-4" style={{ color: 'var(--color-text-header)' }}>
                Product Manager <span className="text-muted fw-normal mx-2">•</span> AI & Developer Tools
              </h1>
              <p className="lead mb-5" style={{ color: 'var(--color-text-body)', maxWidth: '650px' }}>
                I design and ship AI-powered workflows that actually get adopted. I've led 0→1 and iterative releases for internal tools and AI assistants used by cross-functional teams.
              </p>
              <div className="d-flex gap-3">
                <Link to="/work" className="btn btn-primary px-4 py-3 fw-bold fs-5">
                  View Selected Work
                </Link>
                <Link to="/about" className="btn px-4 py-3 fw-bold fs-5" style={{ backgroundColor: 'transparent', border: '1px solid var(--color-border-subtle)', color: 'var(--color-text-header)' }}>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 mt-5" style={{ backgroundColor: 'var(--color-bg-subtle)' }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-5">
            <h2 className="mb-0">Selected Work</h2>
            <Link to="/work" className="nav-link-custom fw-bold">View all projects →</Link>
          </div>
          <div className="row g-4">
            {featured.map(proj => (
              <div key={proj.id} className="col-md-6">
                <ProjectCard {...proj} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
