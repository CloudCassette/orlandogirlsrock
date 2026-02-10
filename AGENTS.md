# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Static website for Orlando Girls Rock Camp, a nonprofit empowering young people through music. Built with Eleventy 3.x and deployed to GitHub Pages.

## Development Commands

```bash
npm run serve    # Start dev server with live reload (http://localhost:8080)
npm run build    # Build site to _site/
```

## Architecture

- **Source directory**: `src/`
- **Output directory**: `_site/` (gitignored)
- **Templating**: Nunjucks (`.njk`)
- **Content**: Markdown with YAML frontmatter

### Key Files

- `.eleventy.js` - Eleventy config; sets input/output dirs, configures CSS passthrough
- `src/_includes/layout.njk` - Base HTML template used by all pages
- `src/styles.css` - Global styles using CSS custom properties (dark theme)
- `src/index.md`, `src/about.md` - Content pages

### Adding Pages

Create a new `.md` file in `src/` with frontmatter:

```markdown
---
layout: layout.njk
title: Page Title
---

Content here...
```

## Deployment

Pushes to `main` automatically trigger GitHub Actions to build and deploy to GitHub Pages. PRs run the build as CI validation.
