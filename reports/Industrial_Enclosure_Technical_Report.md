# Industrial Sheet Metal Enclosure — Design & Manufacturing Documentation

**Author:** Reza Babapiri  
**Discipline:** Mechanical Design · Sheet Metal · CAD Documentation  
**Software:** SOLIDWORKS 2026  
**Document status:** Portfolio case study | Preliminary design review (R_00) | 09 November 2026  
**Scope:** Individual CAD design and documentation exercise; no fabricated prototype or physical test is claimed.

## Executive summary

This project demonstrates a complete, small-scale sheet-metal design workflow: constructing a bent enclosure and removable lid, incorporating self-clinching fasteners, preparing manufacturing-oriented drawings and a bill of materials, and exporting interoperable neutral CAD and flat-pattern cutting files. The case study emphasizes *design traceability*—connecting part features, assembly interfaces, drawing dimensions, and digital fabrication outputs—rather than implying production qualification.

The assembly contains **10 physical components across four BOM items**: one formed steel body, one flat steel lid, four M4 self-clinching nuts and four M4 socket-head cap screws. The native model was prepared in SOLIDWORKS 2026 and exported as STEP AP214. The sheet-metal cutting geometry was exported at a nominal 1:1 scale in DXF format.

## Design basis and documented specifications

| Item | Value / reference |
| --- | --- |
| Formed body | 200 × 150 × 100 mm nominal envelope |
| Lid | 204 × 154 × 1.5 mm |
| Main sheet material | DC01 steel, EN 10130 (as specified in the drawings) |
| Nominal sheet thickness | 1.5 mm, body and lid |
| Body bends | Eight 90° bends with documented nominal inside radius R1.5 mm |
| Body flat-pattern bounds | Approximately 439.19 × 389.19 mm |
| Body base mounting holes | 4 × Ø6 mm, 160 × 110 mm center pattern |
| Body clinch-nut installation holes | 4 × Ø5.41 mm nominal in the cutting model; drawing calls out +0.08/0 mm |
| Lid clearance holes | 4 × Ø4.5 mm on a 120 × 120 mm pitch |
| Lid envelope | 204 × 154 mm |
| Self-clinching fastener | S-M4-2ZC, quantity four, as identified in BOM |
| Screws | ISO 4762 M4 × 8, quantity four |
| Drawing identifiers | IE-BDY-001, IE-LID-002, IE-ASM-003 |
| Drawing sheets | A3, preliminary revision R_00, scale 1:2 |

Dimensions are nominal design values, not general manufacturing tolerances. Bend deduction, actual tooling feasibility, finish specification and assembly-fit verification require confirmation before release.

## Engineering workflow

### 1. Parametric sheet-metal body

A single-piece bent housing was developed with a 1.5 mm sheet thickness. Four wall bends form the primary enclosure volume; four additional inturned top flanges create mounting interfaces for the detachable lid. Reliefs and corner details were represented in the developed flat pattern. A top-flange scheme was selected to keep lid fastening accessible from above while avoiding separate welded brackets in the conceptual design.

### 2. Lid and assembly interfaces

The flat lid was dimensioned 204 × 154 mm and given four Ø4.5 clearance holes. Matching fastener locations were represented by M4 self-clinching nuts seated in the top flanges of the body, with ISO 4762 M4 × 8 screws completing the assembly. A four-item BOM and ballooned assembly drawing were produced. An exploded configuration was prepared for presentation; exploded-line sketching was omitted after repeated software crashes and is not required to interpret the documented assembly.

### 3. Drawing and manufacturing exports

Individual A3 drawings document the body, lid and assembly. The body drawing includes a developed flat pattern, eight bend annotations, hole callouts and finished-form views. The lid drawing includes planar geometry and its four-hole pitch. The assembly drawing includes an isometric view and BOM.

Flat patterns were exported as DXF cutting geometry, excluding bend lines to avoid confusing cut contours with bend annotations. The complete assembly was exported as STEP AP214 to support neutral-CAD review.

## Digital verification performed

These checks were performed on the supplied digital exports; they do **not** constitute manufacturing or functional validation.

| Check | Observed result | Scope |
| --- | --- | --- |
| STEP parse and B-rep topology | 10 SOLIDs; all 10 pass Open Cascade BRepCheck_Analyzer | CAD geometric integrity only |
| Body DXF envelope | ~439.19 × 389.19 mm | Raw DXF coordinates in millimeters |
| Body DXF hole circles | 4 × Ø6 mm and 4 × Ø5.41 mm | Nominal cut geometry |
| Lid DXF envelope | 204 × 154 mm | Raw DXF coordinates in millimeters |
| Lid DXF hole circles | 4 × Ø4.5 mm at 120 × 120 mm pitch | Nominal cut geometry |
| DXF layers and annotations | Cutting geometry on layer 0; educational-license MTEXT remains | Requires shop-side file filtering and license compliance |
| Assembly BOM | 1 body, 1 lid, 4 clinch nuts, 4 screws | Matches 10 physical components |

The exported DXF files contain the strings “SOLIDWORKS Educational Product” and “For Instructional Use Only.” These files are presented as educational portfolio evidence and must not be misrepresented as files approved for commercial manufacturing. The material, tool and license requirements of any fabrication workflow must be independently checked.

## Design for manufacturing: open issues / release gates

1. **PEM self-clinching nut installation.** Verify the 5.41 mm nominal hole diameter, tolerance, panel thickness, hole-to-edge distance and installation force against the *exact* supplier datasheet for the nut revision and selected material. The nominal CAD value alone is not an installation approval.
2. **Bending process.** Confirm bend deduction/K-factor from the intended material lot, machine tooling, bend sequence, flange clearances, corner relief and tolerance accumulation. The DXF is a developed model, not a validated press-brake process sheet.
3. **Assembly fit.** Check formed-part envelope, lid clearance, screw engagement/protrusion and any functional or electrical integration needs. Digital overlap at simplified thread representations is not a physical thread-fit test.
4. **Technical-drawing release.** The revised assembly BOM correctly identifies item 2 as “Sheet Metal Lid, DC01”. Define general tolerances, required finish and coating, and verify the remaining asterisk on the screw part number before release.
5. **Mass-property review.** The assembly title block reports 1,663.03 g; the body and lid title blocks alone report 1,292.49 g and 369.17 g. Because these figures are not reconciled with the fastener masses, the assembly weight should be treated as *unverified* until materials and mass properties are checked in CAD.
6. **Physical qualification.** No prototype fabrication, dimensional inspection, ingress protection, structural FEA, drop test, vibration test, or manufacturing acceptance inspection has been documented.

## Deliverables / document index

| Document | Identifier | Purpose |
| --- | --- | --- |
| Body production-style drawing | IE-BDY-001 | Flat pattern, bend callouts, mounting holes and formed geometry |
| Lid production-style drawing | IE-LID-002 | Cover dimensions and bolt-hole layout |
| Assembly and bill of materials | IE-ASM-003 | Component callouts and quantities |
| Body nominal cut DXF | IE-BDY-001_FlatPattern_CUT(1).dxf | 1:1 flat-pattern geometry; educational-only export |
| Lid nominal cut DXF | IE-LID-002_FlatPattern_CUT.dxf | 1:1 cutting geometry; educational-only export |
| Complete neutral-CAD assembly | IE-ASM-003_Industrial_Enclosure.step | STEP AP214, 10 geometrically valid solids |

> **Release status:** Educational portfolio / Preliminary review R_00. No claim is made of commercial manufacturing approval, certified fastener selection, tolerance-stack verification, or physical testing.

## Skills demonstrated

Parametric sheet-metal modeling; bend and flange layout; component interfaces; fastener selection for conceptual assembly; SOLIDWORKS assembly organization; drawing/BOM preparation; DXF and STEP export; CAD data inspection; design-for-manufacture review; and clear communication of verification limits.

---

**Author:** Reza Babapiri · November 2026  
**Project type:** Self-directed engineering portfolio exercise.  
**License note:** Source CAD exports carry a SOLIDWORKS educational-use notice. No permission for commercial use is implied by publication of this report.
