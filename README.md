<<<<<<< HEAD
# Medisina-Scan — Model Training, Evaluation, and Pretrained Weights

This repository contains the Jupyter notebooks, trained model weights, and
per-image prediction results for the undergraduate thesis:

> **"Comparative Evaluation of MobileNetV2 and MobileViT-XS for Mobile-Based
> Philippine Pharmaceutical Drug Classification Using Synthetic and Real-World
> Images"**
> Bulio, N. O. (2026). Bachelor of Science in Computer Science,
> South Philippine Adventist College.

The study trains and compares two lightweight models, MobileNetV2 and
MobileViT-XS, for classifying ten common Philippine over-the-counter (OTC)
drugs from a single photo. Both models are trained on a synthetic dataset and
evaluated on real-world images taken under fluorescent and natural light. The
better model, MobileViT-XS, was deployed in an offline Android app
(MediSina Scan).

The ten classes are: Alaxan, Bactidol, Bioflu, Biogesic, DayZinc, Decolgen,
Fish Oil, Kremil-S, Medicol, and Neozep.
=======
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
>>>>>>> 346a98f0c9f41d620aafeabd7ec613905bb464df

## APPENDICES A,B,C.zip

<<<<<<< HEAD
## Repository Structure

```
Medisina-Scan/
├── mobilenetv2-ph-drug-ic.ipynb     # MobileNetV2 training + evaluation notebook
├── mobilevit-xs-ph-drug-ic.ipynb    # MobileViT-XS training + evaluation notebook
├── best_mobilenetv2.pth             # Trained MobileNetV2 weights (best epoch)
├── best_mobilevit_xs.pth            # Trained MobileViT-XS weights (best epoch, deployed)
├── Real_World_Predictions/
│   ├── MV2/                         # MobileNetV2 per-image prediction CSVs
│   │   ├── all_realworld_predictions_mv2.csv
│   │   ├── fluorescent_light_predictions_mv2.csv
│   │   └── natural_light_predictions_mv2.csv
│   └── MVitXS/                      # MobileViT-XS per-image prediction CSVs
│       ├── all_realworld_predictions_vitxs.csv
│       ├── fluorescent_light_predictions_vitxs.csv
│       └── natural_light_predictions_vitxs.csv
├── APPENDICES A,B,C.zip             # Blank and accomplished validation forms (A, B, C)
└── README.md                        # This document
```

The Android app (beta APK) is distributed as a GitHub Release, not as a file
in the repository tree (see "Mobile Application" below).
=======
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
>>>>>>> 346a98f0c9f41d620aafeabd7ec613905bb464df

Developed on Kaggle with a GPU (T4) and internet enabled.

<<<<<<< HEAD
## File Purposes

### Notebooks

- `mobilenetv2-ph-drug-ic.ipynb` and `mobilevit-xs-ph-drug-ic.ipynb` are
  end-to-end notebooks. Each one loads the data, builds the model, runs the
  two-phase training, evaluates the model on the synthetic and real-world test
  sets, and saves the outputs (metrics, confusion matrices, prediction CSVs,
  and the best weights). The two notebooks are identical except for the model.

### Model Weight Files

- `best_mobilenetv2.pth` and `best_mobilevit_xs.pth` are PyTorch weight files
  (state dictionaries) saved at the epoch with the highest validation accuracy.
- They let you reproduce the reported evaluation results **without retraining**:
  rebuild the model architecture (as defined in the notebook) and load the
  weights for inference.
- `best_mobilevit_xs.pth` is the model that was converted to TensorFlow Lite
  and deployed in the MediSina Scan app.

---

## Datasets

Both datasets are hosted on Kaggle and attached to the notebook as inputs.

- **Synthetic training dataset** — Pharmaceutical Drugs and Vitamins Synthetic
  Images (vencerlanz09, 2022):
  https://www.kaggle.com/datasets/vencerlanz09/pharmaceutical-drugs-and-vitamins-synthetic-images
  10,000 composited images, 1,000 per class across the 10 classes.
- **Real-world test dataset** — Pills Dataset Test (ncvaog):
  https://www.kaggle.com/datasets/ncvaog/pills-dataset-test
  300 images across the 10 classes, captured under two lighting conditions
  (fluorescent and natural light), 150 images per condition, i.e. 15 images per
  class per condition (30 per class in total). All images were validated by
  three licensed pharmacists before evaluation.

---

## Dependencies and Installation

The notebooks were developed and run on Kaggle's GPU environment, where most
packages are preinstalled. To run locally, use Python 3.10+ and install:

```bash
pip install torch torchvision timm albumentations opencv-python pillow \
            numpy pandas scikit-learn matplotlib seaborn tqdm
```

A CUDA-capable GPU is strongly recommended. Running on CPU is possible for
evaluation with the provided weights, but full training will be very slow.

---

## How to Open and Run the Notebooks

### Option A — Kaggle (recommended, matches the original setup)

1. Go to https://www.kaggle.com and sign in.
2. Click **Create > New Notebook**, then **File > Import Notebook** and upload
   one of the `.ipynb` files.
3. Click **Add Data** (right panel) and attach both datasets listed above.
4. Open **Session options > Accelerator** and select **GPU T4 x2** (or P100).
5. Run all cells from top to bottom.

### Option B — Local (Jupyter)

1. Clone the repository and install the dependencies above.
2. Download both Kaggle datasets and update the dataset paths at the top of the
   notebook to point to your local folders.
3. Launch `jupyter notebook` and run the cells in order.

---

## Execution Order

Run the cells from top to bottom. Each notebook is organized as:

1. Setup and imports (sets the random seed and enables deterministic mode).
2. Data loading and stratified train/validation/test split.
3. Image preprocessing and data augmentation pipeline.
4. Model construction and configuration.
5. Phase 1 training (classification head only, backbone frozen).
6. Phase 2 training (full model, progressive fine-tuning).
7. Load best checkpoint for evaluation.
8. Evaluation on the synthetic test set.
9. Evaluation on the real-world test set (fluorescent and natural light).
10. Confusion matrices, per-class reports, and saving of result files.

**Important:** the Phase 2 cell retrains from scratch if run again. To only
reproduce the evaluation using the provided weights, run the setup, data, and
model-construction cells, then the "load best checkpoint" and evaluation cells,
and **skip the Phase 1 and Phase 2 training cells**.

---

## Reproducing the Reported Results

The notebooks fix a random seed of 42 for Python, NumPy, and PyTorch and enable
deterministic mode, so a full top-to-bottom run reproduces the training,
validation, testing, and evaluation reported in the thesis. The exact per-image
predictions used in the thesis are also provided in `Real_World_Predictions/`
so the numbers can be checked directly without rerunning anything.

### Expected Results (overall accuracy)

| Model | Synthetic Test (N = 1,500) | Fluorescent (N = 150) | Natural (N = 150) |
|-------|----------------------------|-----------------------|-------------------|
| MobileNetV2 | 98.40% | 91.33% | 64.00% |
| MobileViT-XS | 99.13% | 92.67% | 86.67% |

Combined real-world (300 images): MobileNetV2 233/300 (77.67%),
MobileViT-XS 269/300 (89.67%).

---

## Loading and Using the Pretrained Weights

The `.pth` files are state dictionaries, so first rebuild the same model
architecture used in the notebook, then load the weights. Example:

```python
import torch

# Rebuild the SAME architecture defined in the notebook (10 output classes).
# The notebooks build the models with the timm library, e.g.:
#   import timm
#   model = timm.create_model('mobilevit_xs', pretrained=False, num_classes=10)
#   model = timm.create_model('mobilenetv2_100', pretrained=False, num_classes=10)

state = torch.load('best_mobilevit_xs.pth', map_location='cpu')
model.load_state_dict(state)
model.eval()

# Preprocess an image the same way as in the notebook
# (resize to 256x256, contrast enhancement x1.2, ImageNet normalization),
# then run inference:
with torch.no_grad():
    logits = model(image_tensor)          # shape [1, 10]
    probs = torch.softmax(logits, dim=1)
    pred = probs.argmax(dim=1).item()      # predicted class index
    confidence = probs.max().item()        # confidence value
```

Use the same class order as the training labels so the predicted index maps to
the correct drug name. Match the architecture name exactly to the one in the
notebook; if the state dict was saved from a wrapped or custom model, build that
same wrapper before calling `load_state_dict`.

---

## Expected Outputs

Running a notebook produces:

- Training and validation accuracy and loss curves for both phases.
- Confusion matrices for the synthetic, fluorescent, and natural light sets.
- Per-class classification reports (precision, recall, F1-score) and overall
  accuracy for each test condition.
- Per-image prediction CSVs (saved under `Real_World_Predictions/`).
- The best model weights (`best_*.pth`).
- The exported TensorFlow Lite model used for deployment (MobileViT-XS).

---

## Reproducibility Notes

- Keep the random seed at 42 and deterministic mode enabled.
- Use the same preprocessing (resize 256x256, contrast factor 1.2, ImageNet
  normalization) at both training and inference; mismatched preprocessing is the
  most common cause of different numbers.
- Augmentation is applied only to the training set, never to validation or test.
- Small differences can still appear across GPU types or library versions; the
  provided weights and prediction CSVs are the reference for the exact reported
  results.

---

## Mobile Application

The trained MobileViT-XS model was exported and integrated into a fully offline
Android application built with Flutter/Dart for on-device drug identification
without internet access.

Download (beta APK):
https://github.com/DragonSid95/Medisina-Scan/releases/download/v1.0.0/Medisina.Scan.beta.apk

---
=======
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

Download link: https://github.com/DragonSid95/Medisina-Scan/releases/download/v1.0.0/Medisina.Scan.beta.apk

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
>>>>>>> 346a98f0c9f41d620aafeabd7ec613905bb464df

## Disclaimer

MediSina Scan is a research prototype for drug identification only. It is not a
medical device, and its results are not a substitute for professional
pharmaceutical or medical advice. Always consult a licensed pharmacist or
physician.

---

## Citation

<<<<<<< HEAD
> Bulio, N. O. (2026). *Comparative evaluation of MobileNetV2 and MobileViT-XS
> for mobile-based Philippine pharmaceutical drug classification using synthetic
> and real-world images* [Undergraduate thesis]. South Philippine Adventist
> College.
=======
Bulio, N. O. (2026). Comparative Evaluation of MobileNetV2 and MobileViT-XS
for Mobile-Based Philippine Pharmaceutical Drug Classification Using Synthetic
and Real-World Images [Undergraduate thesis, South Philippine Adventist College].
>>>>>>> 346a98f0c9f41d620aafeabd7ec613905bb464df
