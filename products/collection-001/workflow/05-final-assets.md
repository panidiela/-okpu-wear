# Stage 5 — Final Assets & Site Integration

> **Pipeline steps covered:** Step 9 (Generate mockups) · Step 10 (Integrate on site)
>
> This is the last stage. The artwork is approved. Now it becomes a product.
> Precision here protects everything that came before.

---

## Current Piece

```
Status:          [ ] Not started  [~] In progress  [x] Complete
Piece name:      _______________________________________________
Product ID:      _______________________________________________
Selected file:   _______________________________________________
DTF check:       [x] Passed (confirmed in 04-review.md)
Date:            _______________________________________________
```

---

## Step 9 · Mockup Production

Minimum 2 mockups required before site integration.

### Mockup A — Flat Lay

```
Type:            Flat lay (product on flat surface, overhead view)
Background:      [ ] Deep black (#0B0B0B)  [ ] Off-white (#F7F4EE)
Lighting:        Natural, soft — consistent with brand photography rules
Props allowed:   None. The product only.
File saved as:   public/products/[product-id]-mockup-flat.jpg
Resolution:      Min 1200 × 1600 px
Status:          [ ] Not started  [~] In progress  [x] Complete

Notes:
_____________________________________________________________
```

### Mockup B — Worn Product

```
Type:            Product worn by a model or on a head form
Background:      Neutral — deep black or stone surface
Skin tones:      Accurate, warm — not brightened or normalized
Expression:      Calm, natural — not performing for camera
File saved as:   public/products/[product-id]-mockup-worn.jpg
Resolution:      Min 1200 × 1600 px
Status:          [ ] Not started  [~] In progress  [x] Complete

Notes:
_____________________________________________________________
```

### Optional — Additional Angles

```
Mockup C (detail shot of print):  ___________________________
Mockup D (lifestyle context):     ___________________________
```

---

## Mockup Quality Check

Before integration, verify each mockup:

```
MOCKUP A (Flat Lay)
[ ] Background is brand-correct (black or off-white only)
[ ] No props, no distractions
[ ] Print is clearly visible and sharp
[ ] File is JPG, min 1200×1600 px
[ ] Filename matches convention: [product-id]-mockup-flat.jpg

MOCKUP B (Worn)
[ ] Background is neutral and brand-appropriate
[ ] Skin tones are warm and accurate
[ ] Expression is calm, not commercial
[ ] Print is clearly visible on the product
[ ] File is JPG, min 1200×1600 px
[ ] Filename matches convention: [product-id]-mockup-worn.jpg
```

---

## Step 10 · Site Integration

### File Placement

```
DTF source file:
  From: [current location]
  To:   public/products/[product-id]-dtf.png
  Status: [ ] Copied  [ ] Verified

Product image (display):
  From: [current location]
  To:   public/products/[product-id].jpg
  Status: [ ] Copied  [ ] Verified

Mockup flat:
  From: [current location]
  To:   public/products/[product-id]-mockup-flat.jpg
  Status: [ ] Copied  [ ] Verified

Mockup worn:
  From: [current location]
  To:   public/products/[product-id]-mockup-worn.jpg
  Status: [ ] Copied  [ ] Verified
```

### Product Data Verification

Open `src/data/products.ts` and verify the product entry is correct:

```ts
// Verify these fields match final decisions:

id:             "[product-id]"          ← matches filename convention?
name:           "[Product Name]"        ← correct diacritics?
collection:     "ORIGINES"              ← correct?
price:          29                      ← correct?
currency:       "€"                     ← correct?
shortStory:     "[Line 1] [Line 2]"    ← matches 01-story.md final?
images:         ["/products/[id].jpg"] ← file exists at this path?
sizes:          ["S","M","L","XL","XXL"] ← correct?
whatsappMessage: "[message]"           ← product name with diacritics?
```

```
Data verification:
[ ] All fields correct
[ ] Image path resolves to an existing file
[ ] Short story matches approved version from 01-story.md
[ ] WhatsApp message uses correct product name with diacritics
```

### Visual Verification on Site

Run `npm run dev` and check the product at `localhost:3000/produit/[product-id]`:

```
[ ] Product image loads without errors
[ ] Image displays correctly in the product card grid
[ ] Short story displays correctly on the product page
[ ] Price and currency display correctly (29 €)
[ ] All 5 sizes display in the size grid
[ ] WhatsApp button opens the correct pre-filled message
[ ] "Commander sur WhatsApp" CTA is visible and functional
[ ] Product appears in the collection page grid
[ ] No layout breaks on mobile (check at 375px width)
[ ] No layout breaks on desktop (check at 1280px width)
```

---

## Final Production Record

```
ARTWORK
Piece name:         ___________________________________________
Product ID:         ___________________________________________
Collection:         ORIGINES — Collection 001

FILES
DTF source:         public/products/[product-id]-dtf.png     ✓/✗
Product display:    public/products/[product-id].jpg          ✓/✗
Mockup flat:        public/products/[product-id]-mockup-flat.jpg  ✓/✗
Mockup worn:        public/products/[product-id]-mockup-worn.jpg  ✓/✗

PIPELINE STATUS
01 Story:           [x] Complete
02 Art Direction:   [x] Complete
03 Prompt:          [x] Complete  ·  Versions generated: ___
04 Review:          [x] Complete  ·  Variants reviewed:  ___
05 Final Assets:    [x] Complete

COMPLETED BY:       ___________________________________________
COMPLETION DATE:    ___________________________________________

NOTES FOR NEXT PIECE:
_____________________________________________________________
_____________________________________________________________
```

---

## Git Commit

When the piece is fully integrated and verified, commit with this message format:

```
feat(product): add [product-name] — Collection ORIGINES

- Artwork: [brief description of the visual]
- Cultural anchor: [tradition referenced]
- Files: product image + DTF source + 2 mockups
- Pipeline: all 5 stages complete
```

---

## Piece Complete ✓

> *This piece has passed every stage of the Ọkpụ production pipeline.*
> *It is now an official part of Collection 001 — ORIGINES.*

---

*Pipeline v1.0 — June 2026 — Collection 001, ORIGINES*
