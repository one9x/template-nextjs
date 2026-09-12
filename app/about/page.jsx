import Link from 'next/link';

export default function About() {
  return (
    <div className="wrap">
      <p className="eyebrow">One9x Pages · template</p>
      <h1>A real file</h1>
      <p className="lede">
        This page is <code>out/about/index.html</code>, written before anyone
        asked for it. <code>trailingSlash: true</code> is what puts it at that
        path — without it the export writes <code>out/about.html</code> and a
        request for <code>/about</code> 404s.
      </p>
      <div className="row">
        <a className="btn btn-1" href="https://github.com/one9x/template-nextjs/generate">
          Use this template &rarr;
        </a>
        <Link className="btn btn-2" href="/">Back</Link>
      </div>
      <footer>
        Hosted on <a href="https://one9x.com">One9x Pages</a> ·{' '}
        <a href="https://one9x.com/docs/frameworks/nextjs">Next.js guide</a>
      </footer>
    </div>
  );
}
