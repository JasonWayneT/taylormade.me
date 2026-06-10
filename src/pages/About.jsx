export default function About() {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-section-padding">
      <section className="mb-20">
        <div className="max-w-3xl">
          <h1 className="font-h1 text-h1 text-text-primary mb-8 leading-tight">
            I keep the customer in the room. <br />
            <span className="jamaican-gradient-text">Then I make sure it ships.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-primary font-medium mb-0 leading-relaxed">
            Eight years across ops automation, consumer software, and enterprise SaaS. I started at Zero To Sixty Media building internal tooling. Then Sterkly, where I worked on consumer software (macOS security and Safari extensions). Then Cision, where I managed a $40M ARR enterprise media monitoring platform serving 3,500 accounts.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="mb-16">
              <h3 className="text-xs font-bold text-secondary uppercase tracking-widest mb-6">Philosophy</h3>
              <p className="font-body-lg text-text-secondary mb-6 leading-relaxed">
                I think good product work starts with customers and builds up from there. Strategy without customer insight is guessing. Prioritization without strategy is noise. I organize my thinking around the opportunity solution tree: connecting customer outcomes to the opportunities blocking those outcomes before I ever consider solutions. It keeps you from skipping to an answer before you've understood the problem.
              </p>
              <p className="font-body-lg text-text-secondary mb-6 leading-relaxed">
                What I care most about is escaping the build trap. Shipping is not the goal. The goal is the change in customer behavior or business result the ship was supposed to create. At Cision, that meant making customer signals (ticket volume, churn risk, escalation patterns) the actual prioritization input for the engineering roadmap, not just talking points for retrospectives.
              </p>
              <p className="font-body-lg text-text-secondary mb-6 leading-relaxed">
                I'm technically literate. I'm comfortable in a room with engineers, DBAs, and DevOps. But I'm not a deeply technical PM and I don't try to be. That's not the value I add. My value is translating what customers actually need into a plan the engineering team can execute, and making sure the decisions trace back to something real.
              </p>
              <p className="font-body-lg text-text-secondary mb-6 leading-relaxed">
                Outside of work, I build local-first tools with LLMs, mostly things I actually need. The job search tool I use to manage my own applications is one of them. I like the work that happens when you're both the PM and the user.
              </p>
              <p className="font-body-lg text-text-secondary mb-0 leading-relaxed font-semibold">
                I'm looking for an IC PM role, ideally consumer or consumer-adjacent. B2B is on the table too, especially where the product is close to the end user. Not looking for Director or VP.
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
                   <div className="font-body-lg font-bold text-text-primary">Product Manager • Cision</div>
                </div>

                <div className="p-8 rounded-xl border border-border-subtle bg-surface-container-low shadow-sm">
                   <div className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4">Core Expertise</div>
                   <div className="flex flex-wrap gap-3 mt-2">
                      <span className="px-3 py-1 bg-white text-text-primary text-xs font-bold rounded uppercase tracking-wider border border-border-subtle shadow-sm">SaaS</span>
                      <span className="px-3 py-1 bg-white text-text-primary text-xs font-bold rounded uppercase tracking-wider border border-border-subtle shadow-sm">B2B</span>
                      <span className="px-3 py-1 bg-white text-text-primary text-xs font-bold rounded uppercase tracking-wider border border-border-subtle shadow-sm">Enterprise</span>
                      <span className="px-3 py-1 bg-white text-text-primary text-xs font-bold rounded uppercase tracking-wider border border-border-subtle shadow-sm">Consumer</span>
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
