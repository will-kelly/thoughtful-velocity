import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const factors = [
  {name: 'Speed', to: '/docs/factors/speed', text: 'How long it takes the right knowledge to reach the person who needs it.'},
  {name: 'Clarity', to: '/docs/factors/clarity', text: 'Whether that person can understand it and act on it without a meeting.'},
  {name: 'Trust', to: '/docs/factors/trust', text: 'Whether they believe it enough to act without checking with someone first.'},
  {name: 'Reusability', to: '/docs/factors/reusability', text: 'Whether the next person, team, or AI system can use it again.'},
];

export default function Home() {
  return (
    <Layout title="Thoughtful Velocity" description="A way to measure how well knowledge moves through an organization.">
      <header className={`hero hero--primary ${styles.hero}`}>
        <div className="container">
          <Heading as="h1" className="hero__title">Thoughtful Velocity</Heading>
          <p className="hero__subtitle">
            More content doesn't win. Less friction does.
          </p>
          <p className={styles.formula}>Speed × Clarity × Trust × Reusability</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/intro">Read the concept</Link>
            <Link className="button button--outline button--secondary button--lg" to="/docs/diagnose/self-assessment">Score your organization</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.factors}>
          <div className="container">
            <div className="row">
              {factors.map((f) => (
                <div key={f.name} className={`col col--3 ${styles.factor}`}>
                  <Heading as="h3"><Link to={f.to}>{f.name}</Link></Heading>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.closing}>
          <p>
            The factors multiply. They don't add. Fast, clear documentation that nobody trusts is worth
            close to nothing, because people go ask a senior engineer anyway. That's the whole idea.
          </p>
        </section>
      </main>
    </Layout>
  );
}
