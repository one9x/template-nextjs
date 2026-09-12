export default function NotFound() {
  return (
    <div className="wrap">
      <p className="eyebrow">One9x Pages · template</p>
      <h1>404</h1>
      <p className="lede">
        Nothing here. This page is served by the{' '}
        <code>--error 404:/404.html</code> mapping in the deploy workflow.
      </p>
      <div className="row"><a className="btn btn-2" href="/">Back</a></div>
      <footer>
        Hosted on <a href="https://one9x.com">One9x Pages</a> ·{' '}
        <a href="https://one9x.com/docs/frameworks/nextjs">Next.js guide</a>
      </footer>
    </div>
  );
}
