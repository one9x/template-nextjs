import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Next.js</h1>
      <p>Static export, deployed to One9x Pages.</p>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p className="note">
        Every route here is a real HTML file in <code>out/</code>, so this is
        deployed <em>without</em> <code>--spa</code> — an unmatched path is a
        genuine 404 and says so.
      </p>
    </main>
  );
}
