# Medisina-Scan — Model Training Notebooks

This repository contains the Jupyter notebooks used to train and evaluate 
the MobileNetV2 and MobileViT-XS models for the study:

> **"Comparative Evaluation of MobileNetV2 and MobileViT-XS for 
> Mobile-Based Philippine Pharmaceutical Drug Classification Using 
> Synthetic and Real-World Images"**  
> Bulio, N. O. (2026). Bachelor of Science in Computer Science,  
> South Philippine Adventist College.

---

## Repository Contents

| File | Description |
|------|-------------|
| `mobilevit-xs-ph-drug-ic.ipynb` | Training and evaluation notebook for MobileViT-XS |
| `mobilenetv2-ph-drug-ic.ipynb` | Training and evaluation notebook for MobileNetV2 |

---

## Dataset

The real-world test dataset used for out-of-distribution evaluation is 
publicly available on Kaggle:

**Pills Dataset Test** — https://www.kaggle.com/datasets/ncvaog/pills-dataset-test

It contains **300 images** across **10 Philippine over-the-counter drug classes**, 
captured under two lighting conditions (fluorescent and natural light) across 
three surface scenarios (150 images per condition, 30 per class per condition). 
All images were validated by three licensed pharmacists prior to evaluation.

The synthetic training dataset used is:

**Pharmaceutical Drugs and Vitamins Synthetic Images** (vencerlanz09, 2023) — 
available on Kaggle. It contains 10,000 composited images equally distributed 
across 10 drug classes.

---

## How to Reproduce the Results

### Step 1 — Set Up the Environment

The notebooks were developed and executed on **Kaggle's GPU-accelerated 
environment**. It is strongly recommended to run them on Kaggle to 
replicate the exact compute conditions.

1. Go to https://www.kaggle.com
2. Create or log in to your account
3. Click **Create > New Notebook**
4. Upload either `.ipynb` file from this repository

### Step 2 — Attach the Datasets

Inside your Kaggle notebook, attach the following datasets:

- **Synthetic training dataset:** Search for  
  `Pharmaceutical Drugs and Vitamins Synthetic Images` by vencerlanz09
- **Real-world test dataset:** Search for  
  `pills-dataset-test` by ncvaog  
  or go to: https://www.kaggle.com/datasets/ncvaog/pills-dataset-test

To attach: click the **Add Data** button (right panel) and search for each dataset.

### Step 3 — Enable GPU Accelerator

1. In your Kaggle notebook, click **Session options** (right panel)
2. Under **Accelerator**, select **GPU T4 x2** or **P100**
3. This matches the hardware used during the original training runs

### Step 4 — Run the Notebook

Run all cells from top to bottom. Each notebook covers:

- Exploratory data analysis and dataset partitioning
- Image preprocessing and data augmentation pipeline
- Model initialization and architectural configuration
- Phase 1 training (feature extraction — top layers only)
- Phase 2 training (progressive fine-tuning — full model)
- Evaluation on the held-out synthetic test set (N = 1,500)
- Evaluation on the real-world test set under fluorescent and natural light (N = 300)
- Confusion matrix generation and per-class classification reports

### Step 5 — Expected Results

| Model | Synthetic Test Set | Fluorescent Light | Natural Light |
|-------|--------------------|-------------------|---------------|
| MobileNetV2 | 98.20% | 95.33% | 64.67% |
| MobileViT-XS | 99.13% | 94.67% | 84.67% |

---

## Mobile Application

The trained MobileViT-XS model was exported and integrated into a fully 
offline Android mobile application built with Flutter/Dart for on-device 
pharmaceutical drug identification without internet connectivity.

A live demo of the project is available at:  
https://github.com/DragonSid95/Medisina-Scan/releases/download/v1.0.0/Medisina.Scan.beta.apk)

---

## Citation

If you use these notebooks or the dataset in your own research, please cite:

> Bulio, N. O. (2026). *Comparative evaluation of MobileNetV2 and MobileViT-XS 
> for mobile-based Philippine pharmaceutical drug classification using synthetic 
> and real-world images* [Undergraduate thesis]. South Philippine Adventist College.
