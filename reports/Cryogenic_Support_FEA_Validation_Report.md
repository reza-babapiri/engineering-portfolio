# Cryogenic Support — Thermal & Structural FEA Validation
**Independent numerical verification study · ANSYS Mechanical 2025 R2 Student · 20 November 2026**  
**Author:** Reza Babapiri  
**Status:** Educational validation model; **not** a qualified or physically tested cryogenic hardware design.

> This is a self-directed simulation exercise based on a generic cylindrical rod. It is not an employer project and does not reproduce proprietary quantum-computing hardware. The associated eight-page PDF prepared from the author's original seven ANSYS screenshots is available separately from the author; the repository's case-study page contains a schematic visualization and the verified numerical results.

## Executive summary

A 100 mm-long, 3.568 mm-diameter steel-like support was studied under (1) steady-state conduction between 300 K and 77 K, (2) 1000 N axial tension, (3) imported thermal loading only, and (4) combined thermo-mechanical loading. Closed-form calculations provided independent numerical benchmarks.

| Verification output | Analytical | ANSYS | Interpretation |
|---|---:|---:|---|
| Heat flow through rod | 0.334453 W | **0.33444 W** | ≈0.004% difference |
| Axial heat-flux magnitude | 0.03345 W/mm² | **0.03345 W/mm²** | Uniform at displayed precision |
| Midspan axial normal stress | 100.0139 MPa | **100.01 MPa** | Agreement within reporting precision |
| Mechanical-only extension / max deformation | 0.050007 mm | **0.049961 mm** | ≈0.092% difference |
| Thermal-only contraction magnitude | 0.125580 mm | **0.12558 mm** | Agreement within reporting precision |
| Combined shortening magnitude | 0.075573 mm | **0.075618 mm** | ≈0.06% difference |

The global quantities agree very well. The **local peak stress at the completely fixed rim has not been established as mesh-converged** and must not be treated as a validated service stress.

## 01 — Engineering model

| Input | Value |
|---|---|
| Geometry | Solid circular bar, length **100 mm**, diameter **3.568 mm** |
| Cross-sectional area | `A = pi d² / 4 = 9.998609 mm²` |
| Material | `Steel_Cryogenic_Training` (illustrative isotropic material) |
| Young's modulus | **200 GPa** |
| Poisson's ratio | **0.30** |
| Thermal conductivity | **15 W/(m·K)**, constant |
| Thermal expansion | **12 × 10⁻⁶ K⁻¹**, constant secant approximation |
| Thermal boundaries | **300 K** and **77 K** at opposite end faces |
| Side-wall thermal condition | Adiabatic / no added heat-transfer condition |
| Mechanical support | Fully fixed circular end face |
| Axial load | **1000 N tension** at opposite end |
| Stress-free temperature | **20°C** for coupled and thermal-only cases |
| Solvers | Steady-State Thermal; Static Structural; imported body temperature |

There are **no** modeled bolts, joints, contacts, thermal radiation, convection, cold-stage sensors, actual cryocooler interfaces, transient cycles or physical experiments.

## 02 — Thermal conduction benchmark

For constant conductivity and constant cross section:

```text
Q = k A (T_hot − T_cold) / L
  = 0.015 [W/(mm·K)] × 9.998609 [mm²] × 223 [K] / 100 [mm]
  = 0.334453 W

q'' = k × (T_hot − T_cold) / L
    = 0.03345 W/mm²
```

The original ANSYS reaction probe returned **0.33444 W**. The final total heat flux field was uniform at the precision shown on the contour legend. A thermal reaction is integrated heat rate (W), **not** heat flux (W/mm²).

### Thermal mesh refinement

| Nominal mesh size | Reaction heat flow | Difference vs precise analytical value |
|---|---:|---:|
| 3.0 mm | 0.31740 W | ≈5.10% |
| 1.5 mm | 0.33026 W | ≈1.25% |
| 0.75 mm | 0.33444 W | ≈0.004% |

Mesh sizes correspond to settings reported during the ANSYS exercise. Final heat-flow agreement is strong; this is not a formal Grid Convergence Index study.

## 03 — Axial structural benchmark

For an ideal uniaxial bar in linear elasticity:

```text
Nominal sigma_z = F / A = 1000 / 9.998609 = 100.0139 MPa
Axial delta = F L / (A E)
            = (1000 × 100) / (9.998609 × 200000)
            = 0.050007 mm
```

The ANSYS midspan **Normal Stress (Z Axis)** probe, at node 87457 in the recorded screenshot, displayed **100.01 MPa**. Mechanical-only maximum Total Deformation was **0.049961 mm**.

### Structural mesh sensitivity

| Nominal mesh size | Maximum total deformation | Maximum local von Mises stress |
|---|---:|---:|
| Initial coarse | 0.054087 mm | 131.55 MPa |
| 0.75 mm | 0.049962 mm | 122.62 MPa |
| 0.50 mm | 0.049961 mm | 132.72 MPa |

The **global displacement** is stable between the last two grids (difference = 0.000001 mm). The **local maximum von Mises** near the fully fixed end is not stable and is sensitive to boundary restraint and mesh discretization. In the final normal-stress contour, a nearby local **159.04 MPa** peak occurs while the midspan nominal axial stress remains ≈100 MPa. These are different quantities and must not be conflated.

## 04 — One-way thermal-to-structural transfer

The solved temperature distribution was imported into the structural model as **Imported Body Temperature** with a reference temperature of **20°C**. Temperature varied linearly from **26.85°C** to **−196.15°C**.

For the uniform isotropic constant-CTE bar approximation:

```text
T_avg = (26.85 − 196.15) / 2 = −84.65°C
Delta T relative to stress-free reference = −104.65 K
Thermal length change = 12e−6 × 100 × (−104.65)
                      = −0.125580 mm
Combined length change ≈ −0.125580 + 0.050007
                       = −0.075573 mm
```

The global **positive Z axis points toward the fixed end** in the recorded model. Thus ANSYS displayed **+0.12558 mm** thermal-only and **+0.075618 mm** combined Z displacement at the free end, consistent with actual shortening.

### Load-case comparison

| Structural case | Axial load | Imported temperature | Max total deformation | Max local von Mises |
|---|---|---|---:|---:|
| Mechanical-only | 1000 N | Off | 0.049961 mm | 132.72 MPa |
| Thermal-only | Off | On | 0.125620 mm | 41.613 MPa |
| Combined | 1000 N | On | 0.075735 mm | 114.87 MPa |

Von Mises **maxima** come from potentially different locations and cannot be linearly summed or subtracted. For a one-end-free ideal 1D bar, uniform thermal expansion need not create axial stress, but this 3D model's fully fixed face prevents local lateral deformation and produces thermal stress near the support.

## 05 — Interpretation and limitations

**What is verified:** heat flow for a constant-k rod; global axial response for small strain tension; one-way temperature field transfer; midspan axial stress; thermal contraction relative to a specified stress-free temperature; numerical stability of the reported global measures.

**What is not verified:** temperature-dependent `k(T)`, `alpha(T)`, `E(T)`, low-temperature strength or fracture properties, vacuum radiation heat leak, bolts and contact thermal resistance, fatigue/thermal cycling, eigenvalue buckling under compressive load, test correlation, manufacturability, cryogenic reliability, or convergence of local peak stress.

The material parameters are illustrative **training values**. The study supports a modeling workflow, not claims about actual performance of commercial steels from room temperature down to 77 K, much less millikelvin quantum hardware.

## 06 — Recommended next design iteration

1. Create a **multi-strut insulated cryogenic support assembly** with a cold plate, warm flange and realistic interfaces/fasteners.
2. Compare candidate stainless steel, titanium and cryogenic composite struts with traceable **temperature-dependent** material data.
3. Define simultaneous constraints: maximum heat leak, axial/lateral deflection, allowable stress and, where compression occurs, buckling safety.
4. Perform a mesh study on both **integrated heat flow** and defensible **non-singular structural locations**.
5. Automate a parameter sweep (e.g., strut diameter, length and number) and publish a **heat leak vs stiffness** trade-off / Pareto chart.
6. Maintain the original cylindrical rod as the baseline verification benchmark; do not overwrite the v1 results.

## Evidence and reproducibility

- Original ANSYS Mechanical 2025 R2 Student screenshots were supplied by the project author during the study on **20 November 2026**, including the seven report figures.
- Native `.wbpj`, solver databases and CAD files are **not currently included in the public repository**.
- The companion PDF report contains the original figure screenshots, mathematical discussion and summary tables; this GitHub version preserves the underlying text/data and a clean project visualization.
- No claim of physical experimental validation or association with a specific quantum-hardware company is made.

**Author:** Reza Babapiri · **Independent engineering portfolio / simulation verification · 2026**

## Reproducible numerical checks

- [Python analytical check script](../code/cryogenic_validation_checks.py) - standard-library-only calculations and signed/magnitude conventions.
- [Recorded numerical results](../reports/cryogenic_support_validation_results.csv) - manual transcription from supplied ANSYS screenshots; not a raw solver export.

The script verifies nominal and global quantities only; it does not establish convergence of fixed-end pointwise stresses.
