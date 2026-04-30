import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function CaseStudy() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="w-full max-w-7xl mx-auto px-8 py-32 text-center">
        <h2 className="font-h2 text-h2 text-text-primary mb-6">Project not found</h2>
        <Link to="/work" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-manrope font-bold hover:bg-accent-hover transition-colors text-decoration-none">
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <article className="w-full max-w-4xl mx-auto px-8 py-24">
      <Link to="/work" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-manrope font-medium mb-16 text-decoration-none">
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        Back to Projects
      </Link>
      
      <header className="mb-16 border-b border-border-subtle pb-12">
        <h1 className="font-h1 text-h1 text-text-primary mb-6">{project.title}</h1>
        <p className="font-body-lg text-text-secondary mb-8 max-w-3xl leading-relaxed">
          {project.summary}
        </p>
        
        {project.liveUrl && (
          <div className="mb-10">
             {project.liveUrl.startsWith('http') || project.liveUrl.endsWith('.html') ? (
               <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-manrope font-bold hover:bg-accent-hover transition-colors text-decoration-none">
                 {project.liveUrl.endsWith('.html') ? 'Visit Live Demo' : 'Visit Live Project'}
                 <span className="material-symbols-outlined text-sm">north_east</span>
               </a>
             ) : (
               <Link to={project.liveUrl} className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-manrope font-bold hover:bg-accent-hover transition-colors text-decoration-none">
                 Launch Project App
                 <span className="material-symbols-outlined text-sm">arrow_forward</span>
               </Link>
             )}
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border-subtle">
          <div>
              <div className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Role</div>
              <div className="font-body-md text-text-primary font-medium">{project.role}</div>
          </div>
          <div>
              <div className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Focus Area</div>
              <div className="font-body-md text-text-primary font-medium">{project.type}</div>
          </div>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="font-h2 text-h2 text-text-primary mb-6">Context & Problem</h2>
        <p className="font-body-lg text-text-secondary leading-relaxed">{project.context}</p>
      </section>

      <section className="mb-16">
        <h2 className="font-h2 text-h2 text-text-primary mb-6">Goals & Constraints</h2>
        <ul className="space-y-4">
          {project.goals.map((g, i) => (
            <li key={i} className="flex items-start gap-4 font-body-lg text-text-secondary leading-relaxed">
              <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span>{g}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="font-h2 text-h2 text-text-primary mb-6">Approach & Design</h2>
        <p className="font-body-lg text-text-secondary leading-relaxed">{project.approach}</p>
      </section>

      <section className="mb-16 py-12 border-y border-border-subtle">
        <h2 className="font-h2 text-h2 text-text-primary mb-6">Results & Impact</h2>
        <p className="font-body-lg font-semibold text-primary leading-relaxed">{project.results}</p>
      </section>

      <section className="mb-20">
        <h2 className="font-h2 text-h2 text-text-primary mb-8">Executive Takeaways</h2>
        <div className="space-y-8">
          {project.learnings.map((l, i) => (
            <div key={i} className="flex gap-6">
              <span className="font-h2 text-border-subtle font-bold">0{i+1}</span>
              <p className="font-body-lg text-text-secondary leading-relaxed pt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-16 border-t border-border-subtle">
        <h3 className="font-h2 text-h2 text-text-primary mb-8">Interested in the details?</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-manrope font-bold hover:bg-accent-hover transition-colors text-decoration-none">
            Discuss Project
          </Link>
          {project.liveUrl && (
            project.liveUrl.startsWith('http') || project.liveUrl.endsWith('.html') ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-white border border-border-subtle text-text-primary px-8 py-4 rounded-xl font-manrope font-bold hover:bg-gray-50 transition-colors text-decoration-none">
                 Live Demo
              </a>
            ) : (
              <Link to={project.liveUrl} className="bg-white border border-border-subtle text-text-primary px-8 py-4 rounded-xl font-manrope font-bold hover:bg-gray-50 transition-colors text-decoration-none">
                 Launch App
              </Link>
            )
          )}
        </div>
        <p className="mt-8 text-text-secondary font-manrope text-sm max-w-lg mx-auto leading-relaxed">
          For a full breakdown of technical achievements and platform milestones, see my <Link to="/resume" className="text-primary font-bold hover:underline">resume</Link>. This serves as the technical specification for the professional history documented above.
        </p>
      </footer>
    </article>
  );
}
