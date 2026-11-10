<<<<<<< Updated upstream
# Reza Babapiri — Engineering Portfolio

A complete static portfolio for **https://reza-babapiri.github.io/engineering-portfolio/**.

14 documented case studies across mechanical design, embedded robotics, control systems, automotive simulation and computer vision. This edition includes the preliminary Industrial Sheet Metal Enclosure case study.

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
- `projects/` — 14 complete case-study pages with section navigation and expandable evidence images
- `projects.json` — 14 original project metadata objects
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
=======
# Reza Babapiri | Engineering Portfolio

A project-site edition of the multi-disciplinary engineering portfolio, prepared for **GitHub Pages** at:

**https://reza-babapiri.github.io/engineering-portfolio/**

## Explore

- [Mechanical Design & Manufacturing](https://reza-babapiri.github.io/engineering-portfolio/#mechanical)
- [Embedded Systems & Robotics](https://reza-babapiri.github.io/engineering-portfolio/#embedded)
- [Control Systems & Automation](https://reza-babapiri.github.io/engineering-portfolio/#control)
- [Automotive & Vehicle Simulation](https://reza-babapiri.github.io/engineering-portfolio/#automotive)
- [Computer Vision & AI](https://reza-babapiri.github.io/engineering-portfolio/#vision)
- [PDF portfolio library](https://reza-babapiri.github.io/engineering-portfolio/#downloads)

13 documented case-study pages, with source-derived technical explanations, project images and five discipline PDFs plus an overview PDF.

## Deployment

1. Create or open a **public** GitHub repository named `engineering-portfolio` under `reza-babapiri`.
2. Upload the **contents** of this folder directly into the repository root. Keep folders `assets/`, `projects/`, `pdfs/`, `code/` intact.
3. In **Settings → Pages → Build and deployment**, set **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)** and save.
4. Once GitHub Pages publishes the site, browse https://reza-babapiri.github.io/engineering-portfolio/.

This is a **project-site** repository, not the profile repository named `reza-babapiri.github.io`. The site URLs are intentionally relative to the repository root. PDFs link back to the project-site URL.

## Technical contents

- `index.html` — central portfolio page
- `styles.css`, `script.js`, `projects.json` — presentation and project metadata
- `projects/` — individual case-study pages
- `assets/projects/` — original engineering images and project illustrations
- `pdfs/` — downloadable discipline portfolios and overview
- `code/` — shareable selected source material; other work remains documented without raw release

## Provenance and confidentiality

University project material is presented as educational engineering work. The user has represented the primary technical implementation as their own even where academic submissions had group credits. Original documents retain original authorship credits. Industrial case studies do **not** include confidential employer drawings. The V6 engine and planetary gearbox are not presented as completed projects.

For the robotic obstacle avoidance software, technical descriptions should be read with the code: the final branch in the supplied Arduino listing alternates turn direction using a counter rather than always choosing the greater measured clearance. Buck converter no-load response shows significant overshoot and is documented as a limitation.

## Updates

Develop locally and push changes to `main`; GitHub Pages serves the current committed files. Do not upload the ZIP itself to the repository.
>>>>>>> Stashed changes
