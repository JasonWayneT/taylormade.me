import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ id, title, summary, type, tags, liveUrl }) {
  const linkPath = liveUrl || `/case-study/${id}`;
  const isExternal = liveUrl && liveUrl.startsWith('http');

  return (
    <motion.div 
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="card-m3 h-100 d-flex flex-column"
    >
      <div className="mb-4">
        <span className="badge pill px-3 py-2 text-uppercase fw-bold" style={{ backgroundColor: 'var(--color-primary-soft)', color: 'var(--color-primary)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
          {type}
        </span>
      </div>
      
      <h3 className="display-6 fw-bold mb-4 d-flex align-items-center justify-content-between">
        {title}
        <span className="text-secondary ms-2 fs-4" style={{ transform: 'rotate(-45deg)', transition: 'transform 0.3s ease' }}>→</span>
      </h3>
      
      <p className="text-secondary mb-8 flex-grow-1" style={{ fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '90%' }}>
        {summary}
      </p>

      <div className="d-flex flex-wrap gap-3 mb-10">
        {tags?.map(tag => (
          <span key={tag} className="small text-secondary fw-bold px-3 py-1 rounded-pill" style={{ backgroundColor: 'var(--color-bg-subtle)', border: '1px solid var(--color-border-subtle)', fontSize: '0.8rem' }}>
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6 border-top">
         <Link 
            to={`/case-study/${id}`} 
            className="fw-bold fs-5 stretched-link d-flex align-items-center gap-2 text-decoration-none" 
            style={{ color: 'var(--color-primary)' }}
         >
            Read Case Study <span className="ms-1">→</span>
         </Link>
      </div>
    </motion.div>
  );
}
