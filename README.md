# Orlando Girls Rock Camp

Official website for [Orlando Girls Rock Camp](https://orlandogirlsrockcamp.com), a nonprofit empowering girls, non-binary youth, and women through music, art, and community building.

## Tech Stack

- **[Eleventy 3.x](https://www.11ty.dev/)** — Static site generator
- **Nunjucks** — Templating
- **CSS** — Custom properties, flexbox, responsive design
- **GitHub Pages** — Hosting with custom domain

## Development

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
git clone git@github.com:CloudCassette/orlandogirlsrock.git
cd orlandogirlsrock
npm install
```

### Commands

```bash
npm run serve    # Start dev server at http://localhost:8080
npm run build    # Build site to _site/
```

## Project Structure

```
├── src/
│   ├── _includes/
│   │   └── layout.njk      # Base HTML template
│   ├── index.md            # Homepage
│   ├── about.md            # About page
│   ├── styles.css          # Global styles
│   └── ogrc-logo-white.svg # Logo
├── .eleventy.js            # Eleventy config
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD pipeline
└── _site/                  # Built output (gitignored)
```

## Adding Pages

Create a new `.md` file in `src/` with frontmatter:

```markdown
---
layout: layout.njk
title: Page Title
---

Your content here...
```

## Deployment

Pushes to `main` automatically trigger GitHub Actions to build and deploy to GitHub Pages.

- **Production URL:** https://orlandogirlsrockcamp.com
- **Branch protection:** PRs from external contributors require approval

## Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## Links

- [Website](https://orlandogirlsrockcamp.com)
- [Instagram](https://www.instagram.com/orlandogirlsrockcamp/)
- [Facebook](https://www.facebook.com/OrlandoGirlsRockCamp)
- [Bandcamp](https://orlandogirlsrockcamp.bandcamp.com)
- [Linktree](https://linktr.ee/OrlandoGirlsRockCamp)

## License

© Orlando Girls Rock Camp. All rights reserved.
