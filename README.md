# Reza Babapiri — Engineering Portfolio

A complete static portfolio for **https://reza-babapiri.github.io/engineering-portfolio/**.

15 documented case studies across mechanical design, embedded robotics, control systems, automotive simulation and computer vision. This edition includes the Industrial Sheet Metal Enclosure and Planetary Gearbox/Carrier FEA case studies.

## Run locally

Open `index.html` in a browser. No package installation, build command, backend or environment variables are required. Project filtering works directly from the HTML, including when opened from a local file.

## Publish to the existing GitHub repository

1. Clone `https://github.com/reza-babapiri/engineering-portfolio.git` with GitHub Desktop.
2. Copy the **contents** of this folder into that repository's root, replacing matching files and merging directories. Keep the clone's `.git` directory.
3. Commit the changes on `main`, then **Push origin**.
4. In GitHub **Settings → Pages**, use **Deploy from a branch → main → /(root)**.
5. Wait for the Pages deployment to succeed, then open the portfolio URL above.

The accompanying Persian HTML guide gives detailed instructions and a browser upload alternative. The website ZIP is a delivery container; extract it before copying its contents into the repository.

## Contents

- `index.html` — responsive homepage with search and discipline filters
- `projects/` — 15 complete case-study pages with section navigation and expandable evidence images
- `projects.json` — 15 original project metadata objects
- `assets/projects/` — existing original project images and clearly identified illustrative workflows
- `assets/fonts/` — local Inter font and its SIL Open Font License
- `pdfs/` — five category PDFs, the portfolio overview and the enclosure report
- `reports/` — enclosure technical report
- `code/` — original shared source material and the existing Buck converter source archive
- `docs/` — original documentation retained for provenance
- `.nojekyll` — static GitHub Pages marker
- `.gitattributes` — portable source text and binary asset handling

The mechanical category PDF contains its two earlier projects; the enclosure report is a separate PDF. PDF contents were preserved rather than regenerated for this visual redesign.

## Evidence and limitations

The complete technical narratives, project metadata, original assets, reports and code are preserved from the supplied portfolio. Professional, personal and academic contexts remain labelled. The enclosure is an educational preliminary design, with no claim of fabrication, production release or physical validation. Original university credits and source-document limitations remain visible. Confidential employer drawings are not included.

## Maintain the portfolio

To add a project, add its page and evidence files, a homepage card and a `projects.json` entry. Update the homepage/header count and filter counts consistently. Preserve stable filenames so existing shared project URLs continue to resolve.

Site interactions use plain JavaScript. Fonts are bundled locally; no analytics or third-party application dependencies are used. All paths are relative to support GitHub Pages under `/engineering-portfolio/`.

## Official publishing documentation

- https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Planetary gearbox / carrier FEA (November 2026)

`projects/planetary-gearbox.html` is a public preliminary numerical case study with transparent limitations. The two published SVGs (`assets/projects/planetary-gearbox-schematic.svg` and `assets/projects/planet-carrier-convergence.svg`) are explicitly identified as a conceptual cover and a data-driven chart, **not** author-origin CAD/ANSYS screenshots. The original screenshot gallery, browser MP4 and 10-page PDF are bundled separately for media upload; the site does not claim those binary files are hosted until they have been committed.
