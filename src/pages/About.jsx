export default function About() {
  return (
    <div className="container py-5 my-md-4" style={{ maxWidth: '750px' }}>
      <h1 className="mb-4">About Me</h1>
      
      <section className="mb-5">
        <p className="lead mb-4" style={{ color: 'var(--color-text-body)' }}>
          I am a Product Manager with over 6 years of experience operating inside technically complex B2B SaaS ecosystems, bridging the gap between legacy environments and next-gen AI capabilities.
        </p>
        <p style={{ color: 'var(--color-text-body)' }}>
          My career has been defined by stabilizing revenue-bearing systems, untangling massive data ingestion pipelines, and driving migrations under constraint. At Cision, I managed the platform backbone for a $40M ARR suite, navigating complex integrations and directly reducing our largest churn drivers through targeted architectural shifts. Because successful AI products depend entirely on data trust, my deep operational experience with data integrity provides the perfect foundation for building AI systems that actually work in the real world.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-4">How I Work</h2>
        <ul className="list-group list-group-flush border-top border-bottom">
          <li className="list-group-item bg-transparent py-4 px-0" style={{ borderColor: 'var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-text-header)' }}>Outcome-focused:</strong> <span style={{ color: 'var(--color-text-body)' }}>I measure success by revenue protection, stability, and adoption, not just shipping features.</span>
          </li>
          <li className="list-group-item bg-transparent py-4 px-0" style={{ borderColor: 'var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-text-header)' }}>Pragmatic Modernization:</strong> <span style={{ color: 'var(--color-text-body)' }}>I thrive in constrained environments, proving that you can build reliable new capabilities (like AI) without breaking the legacy systems paying the bills.</span>
          </li>
          <li className="list-group-item bg-transparent py-4 px-0" style={{ borderColor: 'var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-text-header)' }}>Cross-functional Alignment:</strong> <span style={{ color: 'var(--color-text-body)' }}>I operate extremely close to engineering while maintaining tight partnerships with DevOps, CX, and GTM.</span>
          </li>
          <li className="list-group-item bg-transparent py-4 px-0" style={{ borderColor: 'var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-text-header)' }}>Capacity Discipline:</strong> <span style={{ color: 'var(--color-text-body)' }}>I aggressively prioritize work based on data and structural limits, avoiding overcommitment to ensure teams execute reliably.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
