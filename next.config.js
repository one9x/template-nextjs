/** @type {import('next').NextConfig} */
module.exports = {
  // The one setting that makes this deployable as static files. Without it,
  // `next build` produces a server bundle that needs Node running.
  output: 'export',
  // REQUIRED on One9x Pages, and verified the hard way: without it the export
  // writes `out/about.html`, and a request for `/about` — which is what
  // next/link generates — 404s. With it on, Next writes `out/about/index.html`
  // and the directory index resolves. A static host serves paths, not routes.
  trailingSlash: true,
  // The default image loader needs a server. Either turn optimisation off, as
  // here, or point images.loader at an external optimiser.
  images: { unoptimized: true },
};
