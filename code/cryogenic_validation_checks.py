"""Check analytical targets for the independent cryogenic support validation model.
Recorded FE results were transcribed from original ANSYS 2025 R2 Student screenshots.
This is an educational verification script, not a material-property database.
"""
from math import pi

L_MM = 100.0
D_MM = 3.568
K_W_PER_MM_K = 0.015
E_N_PER_MM2 = 200000.0
ALPHA_PER_K = 12e-6
FORCE_N = 1000.0
T_HOT_C, T_COLD_C, T_REF_C = 26.85, -196.15, 20.0

OBSERVED_FE = {
    "heat_reaction_W": 0.33444,
    "axial_midpoint_stress_MPa": 100.01,
    "mechanical_max_deformation_mm": 0.049961,
    "thermal_z_displacement_magnitude_mm": 0.12558,
    "combined_z_displacement_magnitude_mm": 0.075618,
}

def difference_pct(measured, expected):
    return abs(measured - expected) * 100.0 / abs(expected)

def main():
    area = pi * D_MM ** 2 / 4.0
    theoretical = {
        "heat_reaction_W": K_W_PER_MM_K * area * (T_HOT_C - T_COLD_C) / L_MM,
        "axial_midpoint_stress_MPa": FORCE_N / area,
        "mechanical_max_deformation_mm": FORCE_N * L_MM / (area * E_N_PER_MM2),
        "thermal_z_displacement_magnitude_mm": abs(ALPHA_PER_K * L_MM * ((T_HOT_C + T_COLD_C)/2 - T_REF_C)),
    }
    theoretical["combined_z_displacement_magnitude_mm"] = abs(
        theoretical["thermal_z_displacement_magnitude_mm"] -
        theoretical["mechanical_max_deformation_mm"]
    )
    print(f"Exact modeled area: {area:.6f} mm^2")
    print(f"{'Quantity':42} {'FE':>11} {'Theory':>11} {'Error':>9}")
    for key, fe in OBSERVED_FE.items():
        a = theoretical[key]
        print(f"{key:42} {fe:11.6f} {a:11.6f} {difference_pct(fe,a):8.4f}%")
    print("Thermal mesh checks:")
    for size, reaction in [(3.0,0.31740),(1.5,0.33026),(0.75,0.33444)]:
        print(f"size={size:.2f} mm, Q={reaction:.5f} W, difference={difference_pct(reaction,theoretical['heat_reaction_W']):.4f}%")
    print("WARNING: local maximum stress near Fixed Support remains mesh-sensitive.")

if __name__ == "__main__":
    main()
