---
layout: default
title: ADAPT
---
# ADAPT
The design of advanced materials begins with determining stable atomic configurations. Given a candidate material or structural sketch, engineers must predict the exact arrangement of atoms that will actually form. This process is described by the Potential Energy Surface (PES), a function parametrized by the atoms, their positions, and environmental conditions. In practice, we typically fix the atoms and environment, leaving the PES as a function of atomic locations alone. Stable structures correspond to local minima of the PES—low energy configurations that can persist in reality. These metastable states are central to modern materials science and nanotechnology, as they ultimately determine the physical properties of the material.
To find metastable structures in atomistic modeling, one typically performs a relaxation procedure: starting from an initial guess, the structure is iteratively optimized along the PES until it settles at a minimum (just as we do with nearly all optimization tasks). The standard tool for this is Density Functional Theory (DFT), which approximates electron interactions to estimate the energy and forces of a given configuration. By following the forces (think gradients of the PES), DFT can guide the system downhill to a minimum.

While accurate, DFT is computationally expensive. A single relaxation trajectory may take ~8 hours on a high-performance cluster, creating a major bottleneck in the design of new materials.
To accelerate this, researchers increasingly turn to machine learning force fields (MLFFs). These models are trained on DFT data and can approximate energy and force calculations over a trajectory in seconds rather than hours. In some workflows, MLFFs are used for a coarse pre-relaxation, with DFT performing the final refinement.



### Publications


> Dramko, Evan, et al. "ADAPT: Lightweight, Long-Range Machine Learning Force Fields Without Graphs." arXiv preprint arXiv:2509.24115 (2025). [Paper](https://arxiv.org/abs/2509.24115); [Zenodo](https://zenodo.org/records/17317543); [Github](https://github.com/EvanDramko/ADAPT_Released)

