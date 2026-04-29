export default function Contact() {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-section-padding flex flex-col justify-center min-h-[70vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="font-h1 text-h1 text-text-primary mb-8 leading-tight">
            Discuss a <br />
            <span className="text-primary">leadership</span> role.
          </h1>
          <p className="font-body-lg text-text-secondary mb-12 leading-relaxed max-w-md">
            I am currently looking for my next full-time product leadership role focused on platform and infrastructure health.
          </p>
          
          <div className="flex flex-col gap-8">
             <div>
               <h4 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-2">Email</h4>
               <a href="mailto:Jason.Wayne.T@gmail.com" className="font-h3 text-xl text-text-primary hover:text-primary transition-colors text-decoration-none">
                 Jason.Wayne.T@gmail.com
               </a>
             </div>
            <div>
              <h4 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-2">Social</h4>
               <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/jasonwaynetaylor/" target="_blank" rel="noopener noreferrer" className="font-h3 text-xl text-text-primary hover:text-primary transition-colors text-decoration-none flex items-center gap-1">
                    LinkedIn <span className="material-symbols-outlined text-sm">north_east</span>
                  </a>
                  <a href="https://github.com/JasonWayneT" target="_blank" rel="noopener noreferrer" className="font-h3 text-xl text-text-primary hover:text-primary transition-colors text-decoration-none flex items-center gap-1">
                    GitHub <span className="material-symbols-outlined text-sm">north_east</span>
                  </a>
               </div>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-border-subtle rounded-2xl p-10 shadow-sm">
          <form className="flex flex-col gap-6">
            <div>
               <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest mb-2">Full Name</label>
               <input type="text" className="w-full bg-surface-container-low border border-border-subtle rounded-lg px-4 py-3 font-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Alex Rivera" />
            </div>
            <div>
               <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest mb-2">Work Email</label>
               <input type="email" className="w-full bg-surface-container-low border border-border-subtle rounded-lg px-4 py-3 font-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="alex@company.com" />
            </div>
            <div>
               <label className="block text-xs font-bold text-text-secondary uppercase tracking-widest mb-2">Message</label>
               <textarea className="w-full bg-surface-container-low border border-border-subtle rounded-lg px-4 py-3 font-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all min-h-[120px]" placeholder="How can I help you scale?"></textarea>
            </div>
            <button type="submit" className="mt-4 bg-primary text-on-primary w-full py-4 rounded-xl font-manrope font-bold hover:bg-accent-hover transition-colors flex items-center justify-center gap-2">
               Submit Request <span className="material-symbols-outlined text-sm">north_east</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
