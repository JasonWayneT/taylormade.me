import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ id, title, description, category, tags }) {
  return (
    <motion.div 
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="card-m3 h-100 d-flex flex-column"
    >
      <div className="mb-4">
        <span className="badge pill px-3 py-2 text-uppercase fw-bold" style={{ backgroundColor: 'var(--color-primary-soft)', color: 'var(--color-primary)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
          {category}
        </span>
      </div>
      
      <h3 className="h4 fw-bold mb-3 d-flex align-items-center justify-content-between">
        {title}
        <span className="text-muted ms-2 fs-5" style={{ transform: 'rotate(-45deg)' }}>→</span>
      </h3>
      
      <p className="text-secondary mb-5 flex-grow-1" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
        {description}
      </p>

      <div className="d-flex flex-wrap gap-2 mb-8">
        {tags?.map(tag => (
          <span key={tag} className="small text-secondary fw-medium px-2 py-1 rounded" style={{ backgroundColor: 'var(--color-bg-subtle)', border: '1px solid var(--color-border-subtle)' }}>
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4 border-top">
         <Link 
            to={`/work/${id}`} 
            className="fw-bold stretched-link d-flex align-items-center gap-2" 
            style={{ color: 'var(--color-primary)' }}
         >
            Read Case Study
         </Link>
      </div>
    </motion.div>
  );
}
