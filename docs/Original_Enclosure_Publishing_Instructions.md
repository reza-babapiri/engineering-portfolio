# Publishing bundle — Industrial Sheet Metal Enclosure

Target repository: https://github.com/reza-babapiri/engineering-portfolio

## Contents of this bundle

- `projects/sheet-metal-enclosure.html` — standalone, styled case-study page using the existing site CSS.
- `pdfs/Industrial_Sheet_Metal_Enclosure_Portfolio_Report.pdf` — 7-page engineering report with a CAD-based cover, not AI-recreated geometry.
- `reports/Industrial_Enclosure_Technical_Report.md` — technical narrative and limitations.
- `assets/projects/sheet-metal-enclosure-cover.png` — portfolio thumbnail from the original CAD drawing.
- `assets/projects/sheet-metal-enclosure-*-drawing.png` — three original engineering drawing previews.
- `HOMEPAGE_CARD_SNIPPET.html` — card HTML to add to Mechanical Design grid in the existing index.html.

## How to publish without replacing existing projects

1. Open repository and navigate to each indicated folder (`projects/`, `pdfs/`, `reports/`, and `assets/projects/`).
2. Use Add file -> Upload files and upload the relevant files into each folder. Commit to main. For the new `reports/` folder, use Add file -> Create new file and create `reports/README.md` or upload it via git from your computer.
3. Edit the root `index.html` and insert the contents of `HOMEPAGE_CARD_SNIPPET.html` **inside the Mechanical Design `<div class="project-grid">`, before the first existing `<article class="project-card">`**.
4. (Optional) Update visible number of case studies from 13 to 14, and add an entry in projects.json if this metadata file feeds other tooling. Avoid removing existing objects.
5. Confirm https://reza-babapiri.github.io/engineering-portfolio/projects/sheet-metal-enclosure.html and click the PDF link. GitHub Pages may take time to deploy after commit.

## Important

Do not upload this ZIP wholesale as one ZIP file; files need to retain the shown folder structure. The existing `index.html`, styles and scripts are deliberately not overwritten in this bundle.

Engineering disclosure: preliminary CAD project, not a tested or production released enclosure. Source DXF files contain educational-license notices, and are not included in this public publication bundle.
