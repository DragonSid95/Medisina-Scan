# Comparative Evaluation of MobileNetV2 and MobileViT-XS for Mobile-Based Philippine Pharmaceutical Drug Classification Using Synthetic and Real-World Images

Nice Ocampo Bulio — Bachelor of Science in Computer Science
South Philippine Adventist College (SPAC), Matanao, Davao del Sur

This repository contains the supplementary materials for the undergraduate
thesis above. The study trains and compares two lightweight deep learning
models, MobileNetV2 and MobileViT-XS, on a synthetic dataset and evaluates
them on real-world images captured under fluorescent and natural light. The
better model, MobileViT-XS, was deployed in an offline Android application
called MediSina Scan.

The ten supported classes are: Alaxan, Bactidol, Bioflu, Biogesic, DayZinc,
Decolgen, Fish Oil, Kremil-S, Medicol, and Neozep.

## The Application

MediSina Scan is an Android app that identifies a single OTC pill or capsule
from a photo. Key features:

- Runs fully offline; images are processed on the device and never uploaded.
- Uses the deployed MobileViT-XS model (TensorFlow Lite, about 7.90 MB).
- Classifies ten common Philippine OTC drugs and shows the predicted drug
  with a confidence value.
- Includes a disclaimer that results are not a substitute for professional
  pharmaceutical or medical advice.

## Results Summary

Both models were tested on a held-out synthetic set and on 300 real-world
images. Overall accuracy:

| Evaluation | MobileNetV2 | MobileViT-XS |
| --- | --- | --- |
| Synthetic test set (1,500 images) | 98.40% | 99.13% |
| Fluorescent light (150 images) | 91.33% | 92.67% |
| Natural light (150 images) | 64.00% | 86.67% |
| Combined real-world (300 images) | 77.67% | 89.67% |

The two models were close on synthetic and fluorescent images, but under
natural light MobileViT-XS stayed accurate while MobileNetV2 dropped sharply.
Because MobileViT-XS generalized better to real-world conditions and had a
smaller model size, it was chosen for deployment in the app.

## Repository Contents

| File / Folder | Description |
| --- | --- |
| `Real_World_Predictions/MV2/` | MobileNetV2 prediction CSVs (all 300, fluorescent, natural). |
| `Real_World_Predictions/MVitXS/` | MobileViT-XS prediction CSVs (all 300, fluorescent, natural). |
| `APPENDICES A,B,C.zip` | Blank and accomplished validation forms (see section below). |
| `mobilenetv2-phr.ipynb` | MobileNetV2 training and evaluation notebook. |
| `mobilevit-xs-phr.ipynb` | MobileViT-XS training and evaluation notebook. |
| `README.md` | This document. |

## APPENDICES A,B,C.zip

This ZIP file contains the validation records for Appendices A, B, and C.
It has three folders, and each folder includes both the blank (raw) form and
the accomplished copies:

```
APPENDICES A,B,C.zip
├── Dataset Validation/
│     - Blank dataset validation form (raw document)
│     - 3 accomplished and signed forms from the licensed pharmacists
│
├── Expert Validation/
│     - Blank expert validation form (raw document)
│     - 3 accomplished forms from the experts
│
└── SUS Evaluation Form/
      - Blank SUS questionnaire
      - 15 accomplished participant forms (as images)
```

- **Dataset Validation** — Appendix A. Reviewed by three licensed pharmacists
  (two from Rojon Pharmacy Corporation and one from Bontuyan Medical Hospital
  Inc.) in Polomolok, South Cotabato.
- **Expert Validation** — Appendix B. Completed by three experts (a computer
  scientist, an information technologist, and a registered pharmacist).
- **SUS Evaluation Form** — Appendix C. Completed by 15 general public
  participants after testing the app.

## Prediction Result Files

Each CSV has one row per image with the lighting condition, true class, image
file name, predicted class, confidence, and whether it was correct. The
`all_*` files cover all 300 images; the `fluorescent_*` and `natural_*` files
split them by lighting condition (150 each).

## Running the Notebooks

Developed on Kaggle with a GPU (T4) and internet enabled.

1. Open `mobilenetv2-phr.ipynb` or `mobilevit-xs-phr.ipynb` in Kaggle or Jupyter.
2. Attach the datasets (links below) as inputs.
3. Run all cells from top to bottom to reproduce training and evaluation.

The prediction CSVs in `Real_World_Predictions/` are included so the reported
results can be checked without retraining.

## Datasets

- Synthetic training data (vencerlanz09, 2022):
  https://www.kaggle.com/datasets/vencerlanz09/pharmaceutical-drugs-and-vitamins-synthetic-images
- Real-world test data (300 images):
  https://www.kaggle.com/datasets/ncvaog/pills-dataset-test
## App Download and Installation (Android only)

Download link: [INSERT DOWNLOAD LINK HERE]

1. Open the link on your Android phone and download the `.apk` file.
2. If prompted that the file might be harmful, tap **Download anyway**.
3. Open the downloaded `.apk` file.
4. If asked, allow installation from this source in Settings.
5. Tap **Install**, then open the app and point the camera at a single pill.

The app runs fully offline and does not upload images.

## Disclaimer

MediSina Scan is a research prototype for drug identification only. It is not
a medical device and its results are not a substitute for professional
pharmaceutical or medical advice. Always consult a licensed pharmacist or
physician.

## Citation

Bulio, N. O. (2026). Comparative Evaluation of MobileNetV2 and MobileViT-XS
for Mobile-Based Philippine Pharmaceutical Drug Classification Using Synthetic
and Real-World Images [Undergraduate thesis, South Philippine Adventist College].
