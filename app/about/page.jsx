import Link from 'next/link';

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>
        This page exists as <code>out/about.html</code> before anyone asks for
        it.
      </p>
      <p>
        <Link href="/">Home</Link>
      </p>
    </main>
  );
}
