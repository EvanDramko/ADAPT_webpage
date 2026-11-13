---
layout: research
title: ADAPT & Trajectory-Level Fine-Tuning
description: Two papers on machine learning for atomic relaxation. Read the results, get the code and data, and connect with Evan Dramko and collaborators.
image: /assets/img/adapt-force-comparison.png
---

<section class="hero" aria-labelledby="hero-title">
  <p class="eyebrow">Machine learning for atomic relaxation</p>
  <h1 id="hero-title">Better models.<br>Better <em>structures.</em></h1>
  <div class="hero-bottom">
    <p class="intro">Two complementary ideas: predict atomic forces without graphs, and train through relaxation to improve where atoms end up.</p>
    <div class="hero-contact">
      <span class="eyebrow">Presented by</span>
      <a class="presenter" href="https://evandramko.github.io/">Evan Dramko <span aria-hidden="true">↗</span></a>
      <span>PhD candidate · Computer Science · Rice University</span>
      <a href="mailto:ed55@rice.edu">ed55@rice.edu</a>
    </div>
  </div>
  <div class="hero-actions">
    <a class="button primary" href="#papers">Explore the papers <span aria-hidden="true">↓</span></a>
    <a class="button" href="https://evandramko.github.io/">Visit my personal website <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section id="papers" class="papers" aria-labelledby="papers-title">
  <div class="section-heading"><h2 id="papers-title">The papers</h2><span>Architecture → Training objective</span></div>
  <article id="adapt" class="paper" aria-labelledby="adapt-title">
    <div class="paper-heading"><span class="paper-number">01 / Architecture</span><span class="publication">Physical Review Research · 2026</span></div>
    <div class="paper-grid">
      <div class="paper-copy">
        <h3 id="adapt-title">ADAPT</h3>
        <p class="paper-subtitle">Lightweight, Long-Range Machine Learning Force Fields Without Graphs</p>
        <p>Atoms become tokens. A Transformer models all pairwise interactions directly from coordinates, enabling accurate force predictions for silicon point defects with substantially less training compute.</p>
        <div class="paper-links" aria-label="ADAPT resources">
          <a class="button primary" href="https://arxiv.org/abs/2509.24115v2">Read paper <span aria-hidden="true">↗</span></a>
          <a href="https://doi.org/10.1103/3xf3-ts5f">Journal</a>
          <a href="https://github.com/EvanDramko/ADAPT_Released">Code</a>
          <a href="https://zenodo.org/records/18962774">Dataset</a>
        </div>
        <div class="result-pair">
          <div><strong>22% <span aria-hidden="true">↓</span></strong><span>lower force MAE</span></div>
          <div><strong>42% <span aria-hidden="true">↓</span></strong><span>lower energy MAE</span></div>
        </div>
        <p class="result-note">Versus retrained MACE on 100 held-out silicon-defect structures. Rounded reductions from Tables II–III.</p>
      </div>
      <figure>
        <a class="figure-link" href="{{ '/assets/img/adapt-force-comparison.png' | relative_url }}" aria-label="View ADAPT force comparison at full size">
          <img src="{{ '/assets/img/adapt-force-comparison.png' | relative_url }}" width="1275" height="1050" alt="Three silicon-defect examples: ADAPT predictions in the top row and retrained MACE below. Black arrows are predicted forces; red arrows are reference forces.">
        </a>
        <figcaption><span>Forces, up close.</span> ADAPT (top) and retrained MACE (bottom); predicted forces in black, reference forces in red. Paper Fig. 3. Select to enlarge.</figcaption>
      </figure>
    </div>
    <details>
      <summary>Authors, exact results &amp; scope</summary>
      <div class="details-body">
        <p><strong>Authors:</strong> Evan Dramko, Yizhi Zhu, Yihuang Xiong, Geoffroy Hautier, Thomas Reps, Christopher Jermaine, and Anastasios Kyrillidis.</p>
        <p>Force MAE: <strong>0.0126 vs. 0.0161 eV/Å</strong>. Energy MAE: <strong>0.5782 vs. 1.0031 eV</strong> (ADAPT vs. retrained MACE). These are silicon-defect benchmark results, not claims across all materials. The paper uses separate force and energy predictors without strict energy conservation; its intended application is structural relaxation, rather than general-purpose molecular dynamics.</p>
        <p><a href="{{ '/papers/adapt.pdf' | relative_url }}">Read the supplied PDF</a> · Phys. Rev. Research <strong>8</strong>, 033266 (2026).</p>
      </div>
    </details>
  </article>

  <article id="trajectory" class="paper" aria-labelledby="trajectory-title">
    <div class="paper-heading"><span class="paper-number">02 / Training objective</span><span class="publication">arXiv preprint · Revised November 2026</span></div>
    <div class="paper-grid">
      <div class="paper-copy">
        <h3 id="trajectory-title">Worse forces can lead<br>to better structures.</h3>
        <p class="paper-subtitle">Trajectory-Level Fine-Tuning of Machine Learning Interatomic Potentials</p>
        <p>Differentiate through a relaxation trajectory and train the pretrained model on its final structure. The result: better relaxed geometries, even as force accuracy gets worse, using existing data without additional DFT calculations.</p>
        <div class="paper-links" aria-label="Trajectory fine-tuning resources">
          <a class="button primary" href="https://arxiv.org/abs/2512.01067">Read paper <span aria-hidden="true">↗</span></a>
          <a href="{{ '/papers/trajectory_supervision.pdf' | relative_url }}">Local PDF</a>
        </div>
        <div class="result-pair trajectory-stats">
          <div><strong>36.6% <span aria-hidden="true">↓</span></strong><span>lower structural error (Dq)</span></div>
          <div><strong>164.3% <span aria-hidden="true">↑</span></strong><span>higher force RMSE</span></div>
        </div>
        <p class="result-note">ADAPT on silicon defects, before vs. after five fine-tuning epochs. Test-set changes reported in Fig. 6.</p>
      </div>
      <div class="trajectory-visual">
        <div class="training-flow" aria-label="Training procedure: initial structure, repeated MLIP relaxation steps, final structure, then backpropagate the final structural error through the trajectory.">
          <span class="eyebrow">Train for the destination</span>
          <div class="flow-steps"><span>Initial<br>structure</span><b aria-hidden="true">→</b><span>MLIP<br>relaxation</span><b aria-hidden="true">→</b><span>Final<br>structure</span></div>
          <div class="flow-return">← Backpropagate final structural error</div>
        </div>
        <figure>
          <a class="figure-link" href="{{ '/assets/img/trajectory-results.png' | relative_url }}" aria-label="View trajectory fine-tuning results at full size">
            <img src="{{ '/assets/img/trajectory-results.png' | relative_url }}" width="1275" height="575" loading="lazy" alt="Test-set changes after five BPTT epochs across ADAPT, ResMLP and PaiNN on silicon defects, pure crystals and catalysts. Structural error decreases in eight of nine settings; force RMSE increases in all nine. PaiNN catalyst results include only two of four trials, because two failed.">
          </a>
          <figcaption><span>Evaluate the outcome.</span> Blue: lower error. Orange: higher error. Paper Fig. 6; catalyst results for PaiNN include only completed trials. Select to enlarge.</figcaption>
        </figure>
      </div>
    </div>
    <details>
      <summary>Authors, method &amp; scope</summary>
      <div class="details-body">
        <p><strong>Authors:</strong> Evan Dramko, Yizhi Zhu, Yifei Zhang, Aleksander Krivokapic, Geoffroy Hautier, Thomas Reps, Christopher Jermaine, and Anastasios Kyrillidis.</p>
        <p>Backpropagation through time (BPTT) optimizes the final mass-weighted structural error, Dq. Experiments cover ADAPT, ResMLP and PaiNN on silicon defects, pure crystals and catalysts. Improvements are not universal: PaiNN’s pure-crystal test error increased, and two of four catalyst trials failed numerically. These task-specific force fields target relaxation, not molecular dynamics.</p>
        <p>A hybrid of short trajectory supervision and implicit equilibrium differentiation also achieved comparable silicon-defect accuracy with <strong>3.5× less peak training memory</strong> in the Appendix J experiment (7.47 → 2.15 GB).</p>
      </div>
    </details>
  </article>
</section>

<section id="people" class="people" aria-labelledby="people-title">
  <div class="section-heading"><h2 id="people-title">Keep the conversation going.</h2></div>
  <div class="people-grid">
    <div class="contact-panel">
      <p class="eyebrow">Find me</p>
      <h3>Evan Dramko</h3>
      <p>Machine learning &amp; AI for scientific discovery.<br>Computer Science, Rice University.</p>
      <a class="contact-url" href="https://evandramko.github.io/">evandramko.github.io <span aria-hidden="true">↗</span></a>
      <div class="contact-links"><a href="mailto:ed55@rice.edu">Email</a><a href="https://scholar.google.com/citations?user=iKjv4W4AAAAJ&amp;hl=en">Google Scholar</a><a href="https://github.com/EvanDramko">GitHub</a></div>
    </div>
    <div class="collaborators">
      <p class="eyebrow">People &amp; research groups</p>
      <ul class="people-list">
        <li><a href="https://akyrillidis.github.io/">Anastasios Kyrillidis</a><a class="group-link" href="https://akyrillidis.github.io/group/">OptimaLab ↗</a></li>
        <li><a href="https://sites.dartmouth.edu/hautiergroup/people/">Geoffroy Hautier</a><a class="group-link" href="https://sites.dartmouth.edu/hautiergroup/">Hautier Group ↗</a></li>
        <li><a href="https://www.cs.rice.edu/~cmj4/">Christopher Jermaine</a><span>Rice University</span></li>
        <li><a href="https://pages.cs.wisc.edu/~reps/">Thomas Reps</a><span>UW–Madison</span></li>
        <li><a href="https://scholar.google.com/citations?user=QBGSLL4AAAAJ&amp;hl=en">Yizhi Zhu</a><span>Coauthor</span></li>
        <li><a href="https://scholar.google.com/citations?user=HLneol4AAAAJ&amp;hl=en">Yihuang Xiong</a><span>Coauthor</span></li>
        <li><a href="https://www.linkedin.com/in/aleksandar-krivokapic-802abb2b6/">Aleksander Krivokapic</a><span>Coauthor</span></li>
        <li><span>Yifei Zhang</span><span>Rice University · Coauthor</span></li>
      </ul>
    </div>
  </div>
</section>

<aside class="share" aria-labelledby="share-title">
  <a href="{{ '/assets/img/project-qr.png' | relative_url }}" download="evan-dramko-research-qr.png" aria-label="Download the project-page QR code for talk slides"><img src="{{ '/assets/img/project-qr.png' | relative_url }}" width="108" height="108" loading="lazy" alt="QR code linking to this research page"></a>
  <div><h2 id="share-title">Take the papers with you.</h2><p>Scan to save this page, or add the QR code to your talk slides.</p><a class="share-url" href="{{ '/' | absolute_url }}">evandramko.github.io/ADAPT_webpage/</a></div>
  <a class="button" href="{{ '/assets/img/project-qr.svg' | relative_url }}" download="evan-dramko-research-qr.svg">Download QR <span aria-hidden="true">↓</span></a>
</aside>
