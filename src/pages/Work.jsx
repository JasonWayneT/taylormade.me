import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Work() {
  return (
    <div className="pt-10">
      <section className="py-section container">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="display-3 fw-bold mb-8">Selected Work</h1>
          <p className="lead text-secondary mb-0 max-readable" style={{ lineHeight: '1.7' }}>
            A deep dive into platforms, systems, and AI workflows that I've scaled and stabilized. 
            From stabilizing a $40M ARR infrastructure to engineering high-integrity data pipelines.
          </p>
        </motion.div>
      </section>

      <section className="container pb-20">
        <div className="row g-10">
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
