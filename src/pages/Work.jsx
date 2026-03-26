import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Work() {
  return (
    <div className="container py-5 my-md-4">
      <h1 className="mb-3">Selected Projects</h1>
      <p className="lead mb-5 pb-3 border-bottom" style={{ maxWidth: '750px', borderColor: 'var(--color-border-subtle) !important' }}>
        A collection of AI applications, developer tools, and product initiatives I have driven from concept to impact.
      </p>
      
      <div className="row g-4">
        {projects.map(proj => (
          <div key={proj.id} className="col-md-6 col-lg-6">
            <ProjectCard {...proj} />
          </div>
        ))}
      </div>
    </div>
  );
}
