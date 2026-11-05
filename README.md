# CANAXESS

Static site for CANAXESS, a web accessibility agency (“The Web Accessibility Experts”). It is an [Eleventy](https://www.11ty.dev/) (11ty) project (`@11ty/eleventy` 0.11) with articles, services, guides, a newsletter, and contact and about pages.

Configuration is in `.eleventy.js`. Eleventy reads templates from `src/` and writes the generated site to `_site/`. Passthrough copies include `_assets`, `download`, `contact/formfragment.html`, and article PNGs. The RSS and syntax-highlighting plugins are enabled.

## Prerequisites

Node.js and npm. This repository does not set an `engines` field or a Node version file. The locked `@11ty/eleventy` 0.11.0 package requires Node.js `>=8`.

## Install

```bash
npm install
```

## Dev server

`package.json` does not define a dev or serve script. Start Eleventy’s local server (watch and reload) with:

```bash
npx eleventy --serve
```

It uses the same input and output directories as a production build: `src/` and `_site/`.

## Build

`package.json` does not define a `build` script. Generate the site with:

```bash
npx eleventy
```

Output is written to `_site/`.

### npm scripts

| Script | What it runs |
| --- | --- |
| `postbuild` | `_utils/copy.js` |
| `test` | Prints an error and exits with status 1 |

`postbuild` is an npm lifecycle hook. npm runs it only after an npm `build` script, which is not defined here, so `npx eleventy` does not invoke it. The file `_utils/copy.js` is not in this repository. Run the hook directly with `npm run postbuild` only if that file is added. `npm test` is a placeholder and is not a site build.
