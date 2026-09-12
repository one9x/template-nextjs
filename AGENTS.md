# Agent instructions

This repository is a **Next.js (static export)** starter for [One9x Pages](https://one9x.com), a
static host. Everything below is specific to this repo; the general platform
docs are at <https://one9x.com/docs> and as markdown at
<https://one9x.com/llms.txt>.

## The one thing to know

| | |
| --- | --- |
| Build | `npm run build` |
| Output folder | `out` |
| Needs `--spa` | no — never pass it |
| Live demo | <https://nextjs.one9x.app/> |

## Deploying

**Prefer the MCP server over the shell.** The One9x CLI is itself an MCP server —
`one9x mcp` speaks MCP over stdin/stdout — so a deploy is one tool call with no
shell glue. Register it once:

```sh
claude mcp add one9x -- one9x mcp
```

Then use the `release` tool with `dir: out`, `site: <the site>`.

Without MCP, the same thing in the shell:

```sh
npm run build
one9x pages release ./out --site <the site> --error 404:/404.html --deploy
```

Leave `--deploy` off to stage instead: the release uploads and gets its own
preview URL at `v<n>--<site>.one9x.app`, and production keeps serving what it
serves now. `one9x pages deploy --site <site> --to v<n>` publishes it later, and
the same command with an earlier `v<n>` is how a rollback works.

**CI does this already.** `.github/workflows/deploy.yml` deploys on every push
once two settings exist (Settings → Secrets and variables → Actions): the
variable `ONE9X_SITE` and the secret `ONE9X_TOKEN`. Until `ONE9X_SITE` is set the
job is skipped, not failed. Prefer letting CI deploy over deploying by hand.

## Rules for this repo

- `output: 'export'` in `next.config.js` is what makes this deployable. Removing it produces a server bundle that cannot be served as files.
- `trailingSlash: true` is REQUIRED, not a preference. Without it the export writes `out/about.html`, and a request for `/about` — which is what `next/link` generates — 404s. The symptom is a working homepage and internal links that all fail.
- `images: { unoptimized: true }` — the default image loader needs a server.
- Do NOT add API routes, `getServerSideProps`, middleware, server actions or ISR. The build fails naming them; that is correct, not a bug to work around. Those need a server, and this is a static host.
- Never pass `--spa`. Every route is a real HTML file, so an unmatched path genuinely is a 404.

## General

- The site name is a DNS label (lowercase letters, digits, hyphens) and becomes
  `<name>.one9x.app`. Create it before deploying: `one9x pages create <name>`. A
  release will not create one.
- Dot-paths are never uploaded — `.git`, `.env`, anything starting with a dot.
  `.well-known` is the one exception.
- `--exclude` globs are single-segment `path.Match`. `**` is not supported and
  matches nothing rather than erroring.
- Pages serves **paths, not routes**: `/about` is served `/about/index.html`. A
  build that wrote `about.html` instead 404s on every internal link while the
  homepage works.
- Re-deploying unchanged content is free and safe — the version id is a content
  hash, so an identical build produces an identical version and uploads nothing.
- Nothing here needs a server. If a change would require one, it is the wrong
  change for this repo.
