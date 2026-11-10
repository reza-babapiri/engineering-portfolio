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
