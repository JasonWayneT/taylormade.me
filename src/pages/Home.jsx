import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <div className="position-relative overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="bg-blob blob-blue"></div>
      <div className="bg-blob blob-yellow"></div>

      <section className="py-10 py-md-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="display-2 fw-bold mb-6 text-gradient" style={{ lineHeight: '1.1' }}>
                  Engineering trust in <br />
                  <span style={{ color: 'var(--color-secondary)' }}>complexity.</span>
                </h1>
                
                <h2 className="h4 fw-medium text-secondary mb-10 mb-md-12" style={{ maxWidth: '720px', lineHeight: '1.5' }}>
                  Product Manager specialized in stabilizing revenue-critical platforms, 
                  engineering robust data pipelines, and bridging the gap between 
                  legacy infrastructure and AI capabilities.
                </h2>

                <div className="d-flex flex-column flex-md-row gap-4 mb-20">
                  <Link to="/work" className="btn btn-primary px-8 py-4 pill fs-5 mb-2 mb-md-0 shadow-lg">
                    View Case Studies ↗
                  </Link>
                  <Link to="/about" className="btn btn-outline-primary px-8 py-4 pill fs-5 ms-md-2">
                    Read Philosophy
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-subtle)' }}>
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-12 gap-4">
            <div>
               <span className="text-secondary fw-bold text-uppercase small mb-2 d-block" style={{ letterSpacing: '0.1em' }}>
                  Portfolio Select
               </span>
               <h2 className="display-5 fw-bold mb-0">Featured Work</h2>
            </div>
            <Link to="/work" className="btn btn-link text-decoration-none fw-bold p-0 text-dark">
               Explore all projects →
            </Link>
          </div>
          
          <div className="row g-6">
            {featured.map((proj, index) => (
              <motion.div 
                key={proj.id} 
                className="col-md-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProjectCard {...proj} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
