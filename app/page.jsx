import Link from 'next/link';

export default function Home() {
  return (
    <div className="wrap">
      <p className="eyebrow">One9x Pages · template</p>
      <h1>Next.js <span className="thin">static export</span></h1>
      <p className="lede">
        This page is the live output of a template repository. Copy it and you
        have a Next.js site that deploys itself to a URL of your own on every
        push.
      </p>

      <div className="row">
        <a className="btn btn-1" href="https://github.com/one9x/template-nextjs/generate">
          Use this template &rarr;
        </a>
        <a className="btn btn-2" href="https://github.com/one9x/template-nextjs">
          View the repo
        </a>
      </div>

      <h2>Start from it</h2>
      <ol>
        <li><strong>Use this template</strong> on GitHub to get your own copy.</li>
        <li>
          Create a site and a token:
          <pre>
            <span className="p">$ </span>one9x pages create mysite{'\n'}
            <span className="p">$ </span>one9x tokens create "github actions"
          </pre>
        </li>
        <li>
          In the new repo, under <strong>Settings → Secrets and variables →
          Actions</strong>, add the variable <code>ONE9X_SITE</code> (
          <code>mysite</code>) and the secret <code>ONE9X_TOKEN</code>.
        </li>
        <li>Push. A pull request gets a preview URL; <code>main</code> goes live.</li>
      </ol>

      <h2>Or deploy what you already have</h2>
      <pre>
        <span className="p">$ </span>npm run build{'\n'}
        <span className="p">$ </span>one9x pages release ./out --site mysite --deploy
      </pre>

      <h2>What this template sets up</h2>
      <table className="facts">
        <tbody>
          <tr><th>Build command</th><td><code>npm run build</code></td></tr>
          <tr><th>Output folder</th><td><code>out</code></td></tr>
          <tr><th>Required config</th><td><code>output: &apos;export&apos;</code> and <code>trailingSlash: true</code></td></tr>
          <tr><th>CI</th><td>preview URL on every pull request, publish on <code>main</code></td></tr>
        </tbody>
      </table>

      <nav className="local">
        <Link href="/about">A second page &rarr;</Link>
        <span style={{ color: 'var(--wire)' }}> — a real file, written at build time.</span>
      </nav>

      <footer>
        Hosted on <a href="https://one9x.com">One9x Pages</a> ·{' '}
        <a href="https://one9x.com/docs/frameworks/nextjs">Next.js guide</a> ·{' '}
        <a href="https://one9x.com/docs">Docs</a>
      </footer>
    </div>
  );
}
