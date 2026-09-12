export default function NotFound() {
  return (
    <main>
      <h1>404</h1>
      <p>
        Nothing here. This page is served by the <code>--error 404:/404.html</code>{' '}
        mapping in the deploy workflow.
      </p>
      <p>
        <a href="/">Home</a>
      </p>
    </main>
  );
}
