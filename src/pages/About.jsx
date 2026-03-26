export default function About() {
  return (
    <div className="container py-5 my-md-4" style={{ maxWidth: '750px' }}>
      <h1 className="mb-4">About Me</h1>
      
      <section className="mb-5">
        <p className="lead mb-4" style={{ color: 'var(--color-text-body)' }}>
          I am a Product Manager focused on AI and Developer Tools. I bridge the gap between complex technical capabilities and intuitive user experiences.
        </p>
        <p style={{ color: 'var(--color-text-body)' }}>
          My background lies in leading cross-functional teams to build 0→1 products and scale existing tools, particularly focusing on workflow automation, large language models, and developer platforms. I believe the best AI products shouldn't feel like "raw technology"—they should feel like seamless extensions of the user's workflow.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h4 mb-4">How I Work</h2>
        <ul className="list-group list-group-flush border-top border-bottom">
          <li className="list-group-item bg-transparent py-4 px-0" style={{ borderColor: 'var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-text-header)' }}>Outcome-focused:</strong> <span style={{ color: 'var(--color-text-body)' }}>I measure success by impact and adoption, not just shipping features.</span>
          </li>
          <li className="list-group-item bg-transparent py-4 px-0" style={{ borderColor: 'var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-text-header)' }}>Model and UX together:</strong> <span style={{ color: 'var(--color-text-body)' }}>User experience and model behavior are inseparable. I design them in tandem.</span>
          </li>
          <li className="list-group-item bg-transparent py-4 px-0" style={{ borderColor: 'var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-text-header)' }}>Collaborative:</strong> <span style={{ color: 'var(--color-text-body)' }}>I partner tightly with Engineering, Design, and Data Science from day one.</span>
          </li>
          <li className="list-group-item bg-transparent py-4 px-0" style={{ borderColor: 'var(--color-border-subtle)' }}>
            <strong style={{ color: 'var(--color-text-header)' }}>Ship and Learn:</strong> <span style={{ color: 'var(--color-text-body)' }}>Get it into users' hands quickly, establish feedback loops, and iterate.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
