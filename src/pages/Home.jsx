import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-primary"></span>
            <span className="font-label-sm text-primary uppercase tracking-widest">Systems-Minded Product Management</span>
          </div>
          <h1 className="font-h1 text-h1 text-text-primary mb-8 leading-tight">
            Build resilient systems. <br />
            <span className="jamaican-gradient-text">Deliver global scale.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-text-secondary mb-10 max-w-2xl">
            Specializing in legacy platform stabilization, data integrity initiatives, and migration strategy. I manage complex technical debt and protect revenue under strict operational constraints.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/work" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-manrope font-bold flex items-center gap-2 hover:bg-accent-hover transition-colors text-decoration-none">
              Explore Projects
              <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </Link>
            <a href="#" className="bg-white border border-border-subtle text-text-primary px-8 py-4 rounded-xl font-manrope font-bold hover:bg-gray-50 transition-colors text-decoration-none">
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* Metrics/Sub-Hero Grid */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-border-subtle">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined" data-icon="speed">speed</span>
            </div>
            <h3 className="font-h3 text-h3 mb-2">Platform Stability</h3>
            <p className="text-text-secondary">Stabilized a $40M ARR enterprise platform, reducing outages and mitigating ~90% of the security backlog under constraint.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-border-subtle">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined" data-icon="database">database</span>
            </div>
            <h3 className="font-h3 text-h3 mb-2">Data Integrity</h3>
            <p className="text-text-secondary">Bypassed legacy ETL pipelines to deliver a 100% reduction in stale-data complaints, addressing a major churn driver.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-border-subtle">
            <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined" data-icon="psychology">psychology</span>
            </div>
            <h3 className="font-h3 text-h3 mb-2">Migration Strategy</h3>
            <p className="text-text-secondary">Executed phased, voluntary transitions to protect customer revenue during multi-year legacy sunset periods.</p>
          </div>
        </div>
      </section>

      {/* Enterprise Impact Section */}
      <section className="bg-surface-container-low py-24 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-h2 text-h2 text-text-primary mb-4">Enterprise Impact</h2>
            <p className="text-text-secondary max-w-xl">High-stakes platform engineering and data integrity initiatives for revenue-critical systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Bellwether */}
            <div className="md:col-span-12 group bg-white rounded-3xl border border-border-subtle overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
              <div className="p-10 flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded uppercase tracking-wider">Data Integrity</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded uppercase tracking-wider">Featured</span>
                </div>
                <h3 className="font-h1 text-h2 mb-4 group-hover:text-primary transition-colors">Bellwether Integration</h3>
                <p className="font-body-lg text-text-secondary max-w-2xl mb-8">
                  Architectural bypass of brittle legacy ETL pipelines to establish direct source-of-truth integration, solving the platform's #1 customer complaint and protecting revenue.
                </p>
                <Link to="/case-study/bellwether" className="font-manrope font-bold text-primary flex items-center gap-2 group/link text-decoration-none">
                  View Case Study
                  <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform" data-icon="east">east</span>
                </Link>
              </div>
            </div>

            {/* Migration Tooling */}
            <div className="md:col-span-12 group bg-white rounded-3xl border border-border-subtle overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row-reverse items-center">
              <div className="w-full md:w-1/3 h-64 bg-gray-900 flex items-center justify-center p-8 shrink-0">
                <span className="material-symbols-outlined text-green-400 text-6xl">database</span>
              </div>
              <div className="p-10 flex-1">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded uppercase tracking-wider mb-4 inline-block">Migration</span>
                <h3 className="font-h3 text-h2 mb-3">Migration Tooling</h3>
                <p className="text-text-secondary mb-6 font-body-lg">
                  Structured tooling for transitioning 700+ enterprise clients off a legacy platform without workflow loss.
                </p>
                <Link to="/case-study/migration" className="text-sm font-bold text-primary flex items-center gap-1 text-decoration-none hover:gap-2 transition-all">
                  Read Project Brief
                  <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Independent AI Lab Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-h2 text-h2 text-text-primary mb-4">Independent AI Lab</h2>
            <p className="text-text-secondary max-w-xl">Exploring local-first agentic architectures, deterministic filtering, and AI-driven workflow automation.</p>
          </div>
          
          {/* JobAgent Card */}
          <div className="group relative bg-surface border border-border-subtle rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 p-8">
              <span className="px-4 py-1.5 bg-green-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">Lab Project</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-5 bg-green-50 flex items-center justify-center p-12 min-h-[300px]">
                <div className="w-32 h-32 bg-white rounded-[2rem] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-green-600 text-6xl" data-weight="fill">precision_manufacturing</span>
                </div>
              </div>
              <div className="md:col-span-7 p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded uppercase tracking-wider">Agentic Workflows</span>
                </div>
                <h3 className="font-h1 text-h2 mb-4 group-hover:text-primary transition-colors">JobAgent</h3>
                <p className="font-body-lg text-text-secondary mb-8 leading-relaxed">
                  A local, zero-knowledge web application that automates job scouting using deterministic gate filters. Replaces manual spreadsheeting with a stateful, 6-stage automated pipeline.
                </p>
                <div className="flex items-center gap-6">
                  <Link to="/case-study/jobagent" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-manrope font-bold flex items-center gap-2 hover:bg-accent-hover transition-all active:scale-95 text-decoration-none">
                    Explore Lab Project
                    <span className="material-symbols-outlined text-sm">science</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-h2 text-h2 mb-6">Looking for your next platform leader?</h2>
          <p className="font-body-lg text-text-secondary mb-10">
            I'm currently looking for my next full-time product leadership role where I can apply my experience in platform stabilization and infrastructure strategy.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-manrope font-bold hover:bg-accent-hover transition-colors text-decoration-none">
              Get in Touch
            </Link>
            <a href="#" className="bg-white border border-border-subtle text-text-primary px-8 py-4 rounded-xl font-manrope font-bold hover:bg-gray-50 transition-colors text-decoration-none">
              Download Work History
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
