import { Link } from 'react-router-dom';

export default function WorkHistory() {
  return (
    <div className="w-full max-w-4xl mx-auto px-8 py-24">
      <header className="mb-20">
        <h1 className="font-h1 text-h1 text-text-primary mb-6">Work History</h1>
        <p className="font-body-lg text-text-secondary leading-relaxed max-w-2xl">
          A narrative breakdown of my professional journey, focused on platform stabilization, 
          technical-business alignment, and the disciplined management of complex B2B SaaS ecosystems.
        </p>
      </header>

      {/* Career Narrative Section */}
      <section className="mb-24">
        <h2 className="font-h2 text-h2 text-text-primary mb-10 border-b border-border-subtle pb-4">Career Narrative</h2>
        <div className="space-y-8 text-text-secondary font-body-lg leading-relaxed">
          <p>
            I’m a product manager who grew up professionally inside technically complex, revenue-bearing B2B SaaS environments. 
            I sit comfortably close to engineering and systems, but my job has always been about business outcomes: 
            stabilizing platforms that customers depend on, aligning teams around realistic plans, protecting revenue, 
            reducing churn drivers, and doing the hard work of modernizing legacy systems without breaking what’s already paying the bills.
          </p>
          <p>
            My style is pragmatic. I use evidence when I have it, and when I don’t, I build the systems that make evidence possible. 
            I’m not a product manager who needs perfect conditions to be effective. I’ve spent most of my career operating 
            inside constraints, legacy architectures, shifting org priorities, and imperfect data, and I’ve learned how 
            to still ship meaningful outcomes.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-24">
        <h2 className="font-h2 text-h2 text-text-primary mb-12 border-b border-border-subtle pb-4">Professional Experience</h2>
        
        <div className="space-y-20">
          {/* Cision */}
          <div className="relative pl-8 border-l-2 border-primary/20">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/20"></div>
            <div className="mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                <h3 className="font-h3 text-h2 text-text-primary">Cision</h3>
                <span className="text-sm font-bold text-text-secondary bg-surface-container px-3 py-1 rounded-full uppercase tracking-widest">2021 – 2026</span>
              </div>
              <div className="text-lg font-bold text-primary mb-4">Product Manager • Platform & Revenue Systems</div>
            </div>
            
            <div className="space-y-6 text-text-secondary font-body-lg leading-relaxed">
              <p>
                Defined and executed the product roadmap for Legacy C3 and CPRE, a revenue-bearing B2B SaaS platform generating approximately $40M in annual recurring revenue across ~3,500 active accounts and ~25,000 users. 
              </p>
              <div className="bg-surface-container-low p-8 rounded-2xl border border-border-subtle my-8">
                <h4 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-6">Key Platform Initiatives</h4>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="text-primary font-bold">01</span>
                    <div>
                      <strong className="text-text-primary block mb-1">Bellwether (Architectural Bypass)</strong>
                      Proposed and led a direct source-of-truth integration that bypassed brittle legacy ETL pipelines, eliminating a 30–40% data drop-off and neutralizing the platform's #1 customer complaint (stale contact data).
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-bold">02</span>
                    <div>
                      <strong className="text-text-primary block mb-1">Migration Tooling & Strategy</strong>
                      Built structured, phased tooling for voluntary transition off the legacy platform. Successfully transitioned roughly 700 high-risk accounts without repeating past forced-migration failures.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-bold">03</span>
                    <div>
                      <strong className="text-text-primary block mb-1">Stability & Security Backlog</strong>
                      Owned the resolution of ~90% of a 300-item penetration test backlog through severity-based phased remediation, while simultaneously reducing outages via index monitoring and dead-account cleanup.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sterkly Services */}
          <div className="relative pl-8 border-l-2 border-border-subtle">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-border-subtle"></div>
            <div className="mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                <h3 className="font-h3 text-h3 text-text-primary">Sterkly Services</h3>
                <span className="text-sm font-bold text-text-secondary bg-surface-container px-3 py-1 rounded-full uppercase tracking-widest">2019 – 2021</span>
              </div>
              <div className="text-lg font-bold text-text-secondary mb-4">Product Manager</div>
            </div>
            <p className="text-text-secondary font-body-lg leading-relaxed">
              Focused on delivery continuity and internal alignment in a technical environment where throughput depended on removing operational bottlenecks. Facilitated requirement sessions and bridged the gap between engineering execution and business constraints.
            </p>
          </div>

          {/* Zero To Sixty Media */}
          <div className="relative pl-8 border-l-2 border-border-subtle">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-border-subtle"></div>
            <div className="mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                <h3 className="font-h3 text-h3 text-text-primary">Zero To Sixty Media</h3>
                <span className="text-sm font-bold text-text-secondary bg-surface-container px-3 py-1 rounded-full uppercase tracking-widest">2017 – 2019</span>
              </div>
              <div className="text-lg font-bold text-text-secondary mb-4">Account Manager / Product Owner</div>
            </div>
            <p className="text-text-secondary font-body-lg leading-relaxed">
              Co-created operational products that automated onboarding and internal fulfillment. Implemented Salesforce automation that saved roughly $22,000 annually and managed vendor contracts for $288,000 in equipment fulfillment.
            </p>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="mt-32 pt-16 border-t border-border-subtle text-center">
        <h3 className="font-h2 text-h2 text-text-primary mb-6">Need the Technical Specifications?</h3>
        <p className="font-body-lg text-text-secondary mb-10 max-w-xl mx-auto">
          The resume provides a condensed, one-page technical breakdown of my milestones, 
          core expertise, and grounding metrics.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/resume" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-manrope font-bold hover:bg-accent-hover transition-colors text-decoration-none">
            View Resume
          </Link>
          <Link to="/contact" className="bg-white border border-border-subtle text-text-primary px-8 py-4 rounded-xl font-manrope font-bold hover:bg-gray-50 transition-colors text-decoration-none">
            Contact Me
          </Link>
        </div>
      </footer>
    </div>
  );
}
