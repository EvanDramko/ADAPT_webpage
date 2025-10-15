---
layout: default
---
# MLIP/MLFF Overview
The design of advanced materials begins with determining stable atomic configurations. Given a candidate material or structural sketch, engineers must predict the exact arrangement of atoms that will actually form. This process is characterized by the Potential Energy Surface (PES) — a function mapping atomic positions (and, in principle, environmental conditions) to total system energy. In practice, we typically fix the atoms and environment, leaving the PES as a function of atomic locations alone. Stable structures correspond to local minima on this surface: low-energy configurations that can persist physically. These metastable states ultimately determine the properties of the material.
To locate such structures, atomistic modeling typically uses relaxation: starting from an initial geometry, the system iteratively descends along the PES until it reaches a minimum. The standard computational tool for this is Density Functional Theory (DFT), which approximates electron interactions to compute the energy and forces of a given configuration. By following the forces (essentially gradients of the PES), DFT drives the system towards an steady-state.

While accurate, DFT is computationally expensive. A single relaxation trajectory may take ~8 hours on a high-performance cluster, creating a major bottleneck in materials design.
To accelerate this, researchers are increasingly turning to machine learning force fields (MLFFs), also called machine learning interatomic potentials (MLIPs). Trained on DFT-calculated energies and forces, these models can evaluate new configurations in seconds rather than hours. In many workflows, MLFFs are used for rapid pre-relaxation, with DFT performing the final refinement.
Our work explores how advancments in machine learning can be leveraged for this task. As an area of ongoing research, we maintain a list of our contributions relevant to this task. 


# Contributions:

### ADAPT: Graphless Force Fields
> Dramko, Evan, et al. "ADAPT: Lightweight, Long-Range Machine Learning Force Fields Without Graphs." arXiv preprint arXiv:2509.24115 (2025). [Paper](https://arxiv.org/abs/2509.24115); [Zenodo](https://zenodo.org/records/17347558); [Github](https://github.com/EvanDramko/ADAPT_Released)

The majority of existing MLFF works utilize graph based neural network (GNN) strategies. GNNs offer rotation and translation equivariance and are a natural fit to the way we often diagram atomic structures. Motivated by the case of crystal defects, we show that the use of direct Cartesian Coordinate systems rather than graphs allows for efficient computation of all possible pairwise interactions through self-attention. The effect of exact distance measures and global interactions is a 33% reduction in prediction error on a defect dataset. Below, we show a side by side comparison of the actual vs predicted forces for ADAPT (left) and MACE (right). 

<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="/assets/img/ours.png" style="width: 45%;">
  <img src="/assets/img/theirs.png" style="width: 45%;">
</div>

We also show that conventional metrics such as MSE or MAE on atomic positions are insufficient for defect systems. Minor perturbations in the bulk lattice dominate these errors, washing out errors near the defect center — the region most relevant to physical behavior. Since DFT refinement can easily correct small lattice deviations, evaluation metrics should emphasize local correctness at defect centers, not uniform accuracy across the crystal.
