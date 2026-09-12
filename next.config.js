/** @type {import('next').NextConfig} */
module.exports = {
  // The one setting that makes this deployable as static files. Without it,
  // `next build` produces a server bundle that needs Node running.
  output: 'export',
  // The default image loader needs a server. Either turn optimisation off, as
  // here, or point images.loader at an external optimiser.
  images: { unoptimized: true },
};
