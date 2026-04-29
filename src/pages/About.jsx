export default function About() {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-section-padding">
      <section className="mb-20">
        <div className="max-w-3xl">
          <h1 className="font-h1 text-h1 text-text-primary mb-8 leading-tight">
            Building foundation, <br />
            <span className="jamaican-gradient-text">not just features.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-primary font-medium mb-0 leading-relaxed">
            I am a Product Manager with 6+ years of experience in B2B SaaS ecosystems, specializing in legacy platform stabilization, data integrity, and complex technical-business alignment.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="mb-16">
              <h3 className="text-xs font-bold text-secondary uppercase tracking-widest mb-6">Philosophy</h3>
              <p className="font-body-lg text-text-secondary mb-6 leading-relaxed">
                I translate high-level executive strategy into rigorous, executable roadmaps. Whether the mandate is platform stability, cost reduction, or revenue protection during a legacy sunset, I own the full cycle—from strategic alignment to shipping on time.
              </p>
              <p className="font-body-lg text-text-secondary mb-6 leading-relaxed">
                Most platforms fail because the foundation is ignored. I focus on the reverse—engineering the robust data pipelines and infrastructure integrity required to support sustainable innovation. At Cision, this meant operating as the central SME across a complex ecosystem, managing eight-week planning cycles, and bridging the gap between engineering execution and business outcomes.
              </p>
              <p className="font-body-lg text-text-secondary mb-6 leading-relaxed">
                I am a deeply technical Product Manager, but I am first and foremost a cross-functional orchestrator. I believe a product is only as good as the alignment between Sales, InfoSec, GTM, and Engineering. My job is to ensure that alignment is unbreakable.
              </p>
              <p className="font-body-lg text-text-secondary mb-0 leading-relaxed font-semibold">
                I am currently looking for my next full-time product leadership role.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
               <div className="bg-surface border border-border-subtle rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-h3 text-lg font-bold text-text-primary mb-3">Legacy Stabilization</h4>
                  <p className="font-body-md text-text-secondary text-sm mb-0">Extending the life and reliability of aging, revenue-critical architecture.</p>
               </div>
               <div className="bg-surface border border-border-subtle rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-h3 text-lg font-bold text-text-primary mb-3">Data Integrity</h4>
                  <p className="font-body-md text-text-secondary text-sm mb-0">Bypassing brittle ETL pipelines to establish direct, high-trust integrations.</p>
               </div>
               <div className="bg-green-50/50 border border-green-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 sm:col-span-2">
                  <h4 className="font-h3 text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">science</span>
                    Independent AI Lab
                  </h4>
                  <p className="font-body-md text-green-700 text-sm mb-0">Building local-first agentic tools and exploring deterministic automation in complex workflows.</p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
             <div className="flex flex-col gap-6">
                <div className="p-8 rounded-xl border border-border-subtle bg-surface-container-low shadow-sm">
                   <div className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4">Core Identity</div>
                   <div className="font-body-lg font-bold text-text-primary">Product Manager (Platform)</div>
                </div>
                
                <div className="p-8 rounded-xl border border-border-subtle bg-surface-container-low shadow-sm">
                   <div className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4">Previously</div>
                   <div className="font-body-lg font-bold text-text-primary">Senior Product Manager • Cision</div>
                </div>

                <div className="p-8 rounded-xl border border-border-subtle bg-surface-container-low shadow-sm">
                   <div className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4">Core Expertise</div>
                   <div className="flex flex-wrap gap-3 mt-2">
                      <span className="px-3 py-1 bg-white text-text-primary text-xs font-bold rounded uppercase tracking-wider border border-border-subtle shadow-sm">SaaS</span>
                      <span className="px-3 py-1 bg-white text-text-primary text-xs font-bold rounded uppercase tracking-wider border border-border-subtle shadow-sm">B2B</span>
                      <span className="px-3 py-1 bg-white text-text-primary text-xs font-bold rounded uppercase tracking-wider border border-border-subtle shadow-sm">Enterprise</span>
                   </div>
                </div>

                <div className="p-8 rounded-xl border border-border-subtle bg-surface-container-low shadow-sm">
                   <div className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4">Connect</div>
                   <div className="flex flex-col gap-4">
                      <a href="https://www.linkedin.com/in/jasonwaynetaylor/" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-primary font-medium flex items-center gap-2 text-decoration-none">
                         <span className="material-symbols-outlined text-lg">link</span>
                         LinkedIn
                      </a>
                      <a href="https://github.com/JasonWayneT" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-primary font-medium flex items-center gap-2 text-decoration-none">
                         <span className="material-symbols-outlined text-lg">code</span>
                         GitHub
                      </a>
                      <a href="mailto:Jason.Wayne.T@gmail.com" className="text-text-primary hover:text-primary font-medium flex items-center gap-2 text-decoration-none">
                         <span className="material-symbols-outlined text-lg">mail</span>
                         Email
                      </a>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
