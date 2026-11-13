# ADAPT and trajectory-level fine-tuning

Research landing page for Evan Dramko and collaborators, hosted with Jekyll on GitHub Pages:
https://evandramko.github.io/ADAPT_webpage/

## Edit and preview

- `index.md`: paper summaries, results, resources, and people.
- `_layouts/research.html`: landing-page layout and navigation.
- `assets/css/research.css`: responsive styling; fonts are served locally.
- `_config.yml`: site metadata and GitHub Pages base path.

With the repository's Ruby dependencies installed, run `bundle exec jekyll serve`
and visit `http://localhost:4000/ADAPT_webpage/`.

The research layout is separate from the original theme, which remains available
for other pages. No client-side JavaScript is required.

## Sources and figures

The supplied PDFs in `papers/` are the source for the summaries and author lists.
They differ in some details from the arXiv metadata, so the webpage also provides
links to the supplied PDFs alongside the public papers.

- ADAPT: https://arxiv.org/abs/2509.24115v2
  Published in Physical Review Research 8, 033266 (2026).
  The 22% force and 42% energy MAE reductions are rounded calculations from
  Tables II–III: 0.0126 vs. 0.0161 eV/Å and 0.5782 vs. 1.0031 eV.
  `adapt-force-comparison.png` is extracted from Figure 3 (PDF page 6).
- Trajectory-level fine-tuning: https://arxiv.org/abs/2512.01067
  The headline changes, −36.6% structural error and +164.3% force RMSE, are
  the ADAPT silicon-defect results in Figure 6 of the supplied PDF (page 8).
  `trajectory-results.png` is extracted from that figure, including its
  completed-trial qualification. These numbers are distinct from the older
  single-setting comparison of roughly 50% lower structural error.

`assets/img/project-qr.png` and `project-qr.svg` encode the project URL above.
Use either in talk slides; regenerate them if the public URL changes.

## Validation

The updated page builds with Jekyll. Internal resource paths and section anchors
were checked in the generated HTML, along with image descriptions and unique IDs.
The extracted paper figures were visually inspected. Browser-based desktop and
mobile visual verification was interrupted and remains outstanding.
