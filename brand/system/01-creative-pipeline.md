# ỌKPỤ CREATIVE SYSTEM — Creative Pipeline

> The official step-by-step process for every Ọkpụ artwork.
> No artwork is published without passing through every stage.
> No stage is skipped. No exception.

---

## Pipeline Map

```
┌─────────────────────────────────────────┐
│  STAGE 1 · IDEA                         │
│  Origin of the artwork concept          │
└──────────────────┬──────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│  STAGE 2 · ART DIRECTOR          🎨     │
│  Story · Emotion · Artistic Direction   │
└──────────────────┬──────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│  STAGE 3 · PROMPT MASTER          ✍️    │
│  Master Prompt · DTF · Variants         │
└──────────────────┬──────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│  STAGE 4 · IMAGE GENERATION       🖼️    │
│  Minimum 4 variants · Multiple tools    │
└──────────────────┬──────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│  STAGE 5 · BRAND GUARDIAN REVIEW  🔍    │
│  Score /10 · Quality · DTF · Identity   │
└──────────┬───────────────────┬──────────┘
           │                   │
        < 9/10               ≥ 9/10
           ↓                   ↓
    Back to Stage 3    ┌───────────────┐
    (new iteration)    │  STAGE 6      │
                       │  VALIDATION   │
                       │  ✅ Approved  │
                       └──────┬────────┘
                              ↓
               ┌──────────────────────────────┐
               │  STAGE 7 · PRODUCT WRITER 📝 │
               │  All written content          │
               └──────────────┬───────────────┘
                              ↓
               ┌──────────────────────────────┐
               │  STAGE 8 · WEBSITE READY  🌐 │
               │  Files · Data · Integration   │
               └──────────────┬───────────────┘
                              ↓
               ┌──────────────────────────────┐
               │  STAGE 9 · PUBLISHED      ✅ │
               └──────────────────────────────┘
```

---

## Stage 1 — Idea

**Objective:** Define the concept that will become an artwork.

**Input:**
- A word, a feeling, a character, a cultural reference, or a collection theme
- May come from the brand owner, a cultural observation, or a collection brief

**Output:**
- A working title
- A one-sentence concept statement
- The collection it belongs to

**Validation condition:**
- The concept is specific enough to generate a story
- It is rooted in African cultural heritage (not generic)
- It has a clear emotional direction

**Handover:** Verbal or written brief → Art Director

---

## Stage 2 — Art Director

**Role:** [02-role-art-director.md](02-role-art-director.md)
**Objective:** Transform the idea into a complete artistic brief.

**Input:**
- Concept statement from Stage 1

**Output — Art Director Handover Document:**
```
- Artwork title
- Two-line short story (final version)
- Dominant emotion (one word)
- Cultural anchor (specific tradition)
- Subject description (precise, paintable)
- Composition notes (placement, orientation)
- Lighting direction (single source)
- Color mapping (palette colors to elements)
- Texture / medium
- Art style reference (named artist or movement)
- Negative direction (what to avoid)
```

**Validation conditions:**
- Short story has been through minimum 2 drafts
- Dominant emotion is a single word
- Cultural reference is specific (not "African art")
- Subject description is detailed enough to paint from

**Announcement:**
```
Art Director completed.
Switching to Prompt Master.
```

**Handover template:** [07-handover.md → Section A](07-handover.md)

---

## Stage 3 — Prompt Master

**Role:** [03-role-prompt-master.md](03-role-prompt-master.md)
**Objective:** Transform the artistic brief into professional image generation prompts.

**Input:**
- Art Director Handover Document (complete)

**Output — Prompt Package:**
```
- Master prompt (full)
- Negative prompt
- DTF-ready prompt (transparent edges explicit)
- Midjourney variant (with flags)
- DALL-E variant (adapted vocabulary)
- Ideogram variant
- T-shirt placement notes
- Hoodie placement notes
- Tote bag placement notes
```

**Validation conditions:**
- DTF Lock block present verbatim in every prompt version
- No generic cultural references ("African style" forbidden)
- Lighting is specific and single-source
- At least 3 tool-specific variants produced

**Announcement:**
```
Prompt Master completed.
Waiting for image generation.
Please generate minimum 4 variants and share them for Brand Guardian review.
```

**Handover template:** [07-handover.md → Section B](07-handover.md)

---

## Stage 4 — Image Generation

**Objective:** Produce image variants using the Prompt Master's package.

**Input:**
- Prompt package from Stage 3

**Output:**
- Minimum 4 variants
- Generated with at least 1 tool from the prompt package
- Saved locally with consistent naming: `[product-id]-v01.jpg`, `[product-id]-v02.jpg`...

**Validation conditions:**
- Minimum 4 variants before proceeding to review
- At least one DTF prompt version was used
- Files are named and saved before Brand Guardian review begins

**Note:** This stage is performed by the user, not the GPT. The GPT waits for the user to share or describe the generated images.

---

## Stage 5 — Brand Guardian Review

**Role:** [04-role-brand-guardian.md](04-role-brand-guardian.md)
**Objective:** Evaluate every variant against the 10-point quality framework.

**Input:**
- Generated image variants (minimum 4)

**Output:**
- Score /10 for each variant across 5 dimensions
- Written critique: what works, what fails, why
- DTF compliance check (6-point)
- Decision: PASS (≥ 9/10) or REJECT (< 9/10)
- If rejected: specific revised prompt provided immediately

**Validation conditions:**
- Minimum score of 9/10 required to proceed
- All 6 DTF checks must pass independently of the artistic score
- If any variant passes: move to Stage 6
- If none pass: return to Stage 3 with a new prompt iteration

**Loop rule:** There is no limit on the number of iterations. Quality is the only deadline.

**Announcement (if rejected):**
```
Brand Guardian review completed.
Score: [X]/10 — Below threshold.
Returning to Prompt Master for iteration [N].
```

**Announcement (if approved):**
```
Brand Guardian validation completed.
Score: [X]/10 — Artwork approved.
Switching to Product Writer.
```

---

## Stage 6 — Validation

**Objective:** Formally record the approved artwork.

**Input:**
- Approved variant file reference
- Final Brand Guardian score and notes

**Output:**
- Approval record (file name, score, date)
- Art Director Handover document archived
- Final prompt version recorded in [../prompts/prompt-template.md](../prompts/prompt-template.md)

---

## Stage 7 — Product Writer

**Role:** [05-role-product-writer.md](05-role-product-writer.md)
**Objective:** Produce all written content for the product.

**Input:**
- Approved artwork
- Art Director Handover Document (for story reference)
- Brand tone-of-voice: [../tone-of-voice.md](../tone-of-voice.md)

**Output — Product Content Package:**
```
- Product title (final)
- Short story (2 lines — poetic)
- Long story (3–5 paragraphs)
- Shop description (neutral, informative)
- SEO: title tag + meta description
- Instagram caption
- Facebook post
- Pinterest description
- WhatsApp order message
- Hashtags (max 20)
- Filename: [product-id].jpg
- URL slug: /produit/[product-id]
- Alt text
```

**Validation conditions:**
- Short story uses approved version from Art Director
- All copy passes Brand Guardian tone check
- No exclamation marks, no urgency language, no generic descriptors
- WhatsApp message uses correct product name with diacritics

**Announcement:**
```
Product Writer completed.
Project completed.
All content ready for website integration.
```

**Handover template:** [07-handover.md → Section C](07-handover.md)

---

## Stage 8 — Website Ready

**Objective:** Integrate the artwork and content into the site.

**Input:**
- Approved artwork file (DTF source + display JPG)
- Product Content Package from Stage 7

**Checklist:**
```
[ ] Artwork placed in public/products/[product-id].jpg
[ ] DTF source placed in public/products/[product-id]-dtf.png
[ ] Product entry added/updated in src/data/products.ts
[ ] Product page verified at /produit/[product-id]
[ ] Mobile layout verified (375px)
[ ] Desktop layout verified (1280px)
[ ] WhatsApp button tested
[ ] Build passes (npm run build)
[ ] Git committed and pushed
```

---

## Stage 9 — Published

**Objective:** The artwork is live and officially part of the collection.

**Output:**
- Live product URL
- Git commit reference
- Production record updated in [../../products/collection-001/workflow/05-final-assets.md](../../products/collection-001/workflow/05-final-assets.md)

---

*Ọkpụ Creative System v1.0 — June 2026*
