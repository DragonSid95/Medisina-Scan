# MediSina Scan

Offline Android application for image-based classification of ten common
Philippine over-the-counter (OTC) pharmaceutical drugs, built on a
lightweight MobileViT-XS deep learning model.

This repository contains the supplementary materials for the undergraduate
thesis:

**"Comparative Evaluation of MobileNetV2 and MobileViT-XS for Mobile-Based
Philippine Pharmaceutical Drug Classification Using Synthetic and Real-World
Images"**
Nice Ocampo Bulio — Bachelor of Science in Computer Science
South Philippine Adventist College (SPAC), Matanao, Davao del Sur

The study trains and compares two lightweight models, MobileNetV2 and
MobileViT-XS, on a synthetic dataset and evaluates them on real-world images
captured under fluorescent and natural light. MobileViT-XS was selected for
deployment in the MediSina Scan app.

The ten supported classes are: Alaxan, Bactidol, Bioflu, Biogesic, DayZinc,
Decolgen, Fish Oil, Kremil-S, Medicol, and Neozep.

## Repository Contents

| File / Folder | Description |
| --- | --- |
| `Real_World_Predictions/MV2/` | Per-image prediction CSVs for MobileNetV2: `all_realworld_predictions_mv2.csv` (all 300), `fluorescent_light_predictions_mv2.csv` (150), `natural_light_predictions_mv2.csv` (150). |
| `Real_World_Predictions/MVitXS/` | Per-image prediction CSVs for MobileViT-XS: `all_realworld_predictions_vitxs.csv` (all 300), `fluorescent_light_predictions_vitxs.csv` (150), `natural_light_predictions_vitxs.csv` (150). |
| `APPENDICES A,B,C.zip` | Validation records (blank and accomplished forms). See structure below. |
| `mobilenetv2-phr.ipynb` | Notebook used to train and evaluate MobileNetV2. |
| `mobilevit-xs-phr.ipynb` | Notebook used to train and evaluate MobileViT-XS. |
| `README.md` | This document. |

## Validation Records (APPENDICES A,B,C.zip)

The ZIP contains three folders. Each folder holds both the blank (raw) form
and the accomplished copies:
