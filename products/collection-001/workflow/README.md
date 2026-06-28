# Ọkpụ — Artwork Production Pipeline
## Collection 001 · ORIGINES

> This folder is the production workspace for every artwork in Collection 001.
> No piece goes live without passing through every stage of this pipeline.
> The pipeline is not a checklist — it is a creative discipline.

---

## Why a Pipeline

Ọkpụ pieces are artworks before they are products. That means production is a creative act, not a manufacturing step. The pipeline protects the work from two failure modes:

1. **Rushing** — generating an image, liking it, shipping it. The result looks like a T-shirt print, not a gallery piece.
2. **Drifting** — iterating without direction until the original intention is lost.

The pipeline holds both ends: the story comes first, the file format check comes last. Everything in between is creative work.

---

## Pipeline Overview

```
01-story.md          ←  Define the story and emotional intent
02-art-direction.md  ←  Define the visual direction
03-prompt.md         ←  Write and iterate the image generation prompt
04-review.md         ←  Critique variants, improve the prompt, select the best
05-final-assets.md   ←  DTF verification, mockups, site integration
```

Each file has a **status field** at the top. Update it as you move through stages:
- `[ ] Not started`
- `[~] In progress`
- `[x] Complete`

---

## The 10-Step Official Process

### Stage 1 — Story
**File:** `01-story.md`

**Step 1 · Define the story**
Write the two-line poetic short story that will appear on the product page.
This is not a description — it is the emotional core of the piece.
If the story isn't right, don't move forward.

**Step 2 · Define the emotion**
Name the single dominant emotion the artwork must produce in the viewer.
Not two emotions. One. Everything else is secondary.

---

### Stage 2 — Art Direction
**File:** `02-art-direction.md`

**Step 3 · Write the prompt**
Build the image generation prompt using the master template from `brand/prompts/master-prompt.md`.
Fill every field. Do not use generic language. Reference specific African art traditions.
Always include the full DTF Lock block.

Start here — don't open an image generator until the prompt is written down and reviewed.

---

### Stage 3 — Generation & Review
**File:** `03-prompt.md` + `04-review.md`

**Step 4 · Generate multiple variants**
Generate a minimum of 4 variants using the prompt. Use different seeds or slight prompt variations.
Never evaluate a single image — you need comparison.

**Step 5 · Critique the variants**
Apply the Art Director review framework from `brand/gpts/okpu-art-director.md`.
Score each variant. Identify specifically what fails and what works.

**Step 6 · Improve the prompt**
Based on the critique, rewrite the prompt. Note what changed and why.
Generate a new round of variants.
Repeat until at least one variant passes all criteria.

---

### Stage 4 — Selection & Validation
**File:** `04-review.md`

**Step 7 · Select the best illustration**
Choose the final artwork. Document why it was selected.
Attach the file reference.

**Step 8 · Verify DTF compliance**
Run the full DTF checklist from `brand/prompts/dtf-rules.md`.
All 6 checks must pass. No exceptions.

---

### Stage 5 — Production
**File:** `05-final-assets.md`

**Step 9 · Generate mockups**
Create at least 2 mockups: flat lay + worn product.
Mockups must use brand color backgrounds only (deep black or off-white).

**Step 10 · Integrate on the site**
Place the final file in `public/products/[product-id].jpg`.
Verify it displays correctly on the product page.
Mark the piece as complete.

---

## File Naming Convention

| Asset | Path | Format |
|-------|------|--------|
| Final artwork | `public/products/[product-id].jpg` | JPG 300 DPI |
| DTF source file | `public/products/[product-id]-dtf.png` | PNG transparent |
| Mockup flat | `public/products/[product-id]-mockup-flat.jpg` | JPG |
| Mockup worn | `public/products/[product-id]-mockup-worn.jpg` | JPG |

---

## How to Use This Folder for a New Collection

When starting a new collection:
1. Duplicate this entire `workflow/` folder into the new collection's directory
2. Reset all status fields to `[ ] Not started`
3. Update the collection name and piece list in each template
4. Begin with `01-story.md` for the first piece

---

## The Rule

> *An artwork is not finished when there is nothing left to add. It is finished when there is nothing left to remove.*
>
> A piece is ready to ship when it passes every step of this pipeline — not before.

---

*Pipeline version 1.0 — June 2026 — Collection 001, ORIGINES*
