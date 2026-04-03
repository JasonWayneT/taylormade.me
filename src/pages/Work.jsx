import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Work() {
  return (
    <div className="pt-32 pb-20">
      <section className="container mb-20">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="display-4 fw-bold mb-6">Selected Work</h1>
          <p className="lead text-secondary mb-0" style={{ maxWidth: '700px' }}>
            A deep dive into platforms, systems, and AI workflows that I've scaled and stabilized. 
            From stabilizing a $40M ARR infrastructure to engineering high-integrity data pipelines.
          </p>
        </motion.div>
      </section>

      <section className="container">
        <div className="row g-8">
          {projects.map((proj, index) => (
            <motion.div 
              key={proj.id} 
              className="col-md-6 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard {...proj} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
