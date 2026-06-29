# ỌKPỤ CREATIVE SYSTEM — Creative Pipeline

> **Version:** 2.0 — June 2026
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
│  STAGE 2 · CREATIVE BRIEF        📋     │
│  11 fields · User + GPT together        │
└──────────────────┬──────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│  STAGE 3 · STUDIO DIRECTOR       🎬     │
│  Pipeline review · Role activation      │
└──────────────────┬──────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│  STAGE 4 · ART DIRECTOR          🎨     │
│  Story · Emotion · Artistic Direction   │
└──────────────────┬──────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│  STAGE 5 · PROMPT MASTER V1      ✍️    │
│  First prompt draft from handover       │
└──────────────────┬──────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│  STAGE 6 · SELF REVIEW           🔍     │
│  7-dimension self-critique · V1 → V2   │
└──────────────────┬──────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│  STAGE 7 · FINAL PROMPT          ✅     │
│  Production-ready prompt package        │
└──────────────────┬──────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│  STAGE 8 · IMAGE GENERATION      🖼️    │
│  Minimum 4 variants · Multiple tools    │
└──────────────────┬──────────────────────┘
                   ↓
┌─────────────────────────────────────────┐
│  STAGE 9 · BRAND GUARDIAN REVIEW 🔍    │
│  Score /10 · Gallery question · DTF     │
└──────────┬───────────────────┬──────────┘
           │                   │
    Score < 9/10          Score ≥ 9/10
    OR Gallery = NO       AND Gallery = YES
           ↓                   ↓
    Back to Stage 5    ┌───────────────┐
    (new iteration)    │  STAGE 10     │
                       │  VALIDATION   │
                       │  ✅ Approved  │
                       └──────┬────────┘
                              ↓
               ┌──────────────────────────────┐
               │  STAGE 11 · PRODUCT WRITER 📝│
               │  All written content          │
               └──────────────┬───────────────┘
                              ↓
               ┌──────────────────────────────┐
               │  STAGE 12 · WEBSITE READY 🌐 │
               │  Files · Data · Integration   │
               └──────────────┬───────────────┘
                              ↓
               ┌──────────────────────────────┐
               │  STAGE 13 · PUBLISHED     ✅ │
               └──────────────────────────────┘
```

---

## Stage 1 — Idea

**Objective:** Define the concept that will become an artwork.

**Input:**
- A word, a feeling, a character, a cultural reference, or a collection theme

**Output:**
- A working title
- A one-sentence concept statement
- The collection it belongs to

**Validation condition:**
- The concept is specific enough to generate a Creative Brief
- It is rooted in African cultural heritage (not generic)
- It has a clear emotional direction

**Handover:** Concept → Creative Brief stage

---

## Stage 2 — Creative Brief

**Role:** [00-creative-brief.md](00-creative-brief.md)
**Template:** [templates/creative-brief-template.md](templates/creative-brief-template.md)
**Objective:** Build the complete foundation of the artwork before any artistic work begins.

**Input:**
- Concept statement from Stage 1

**Output — Creative Brief (11 mandatory fields):**
```
1.  Story                  — human narrative with tension
2.  Target Emotion         — one word
3.  Cultural Reference     — specific tradition named
4.  Historical Era         — defined time anchor
5.  Target Audience        — described as a specific person
6.  Purpose                — social function of the piece
7.  Collection             — confirmed with position in series
8.  Printing Constraints   — garment types and print areas
9.  Mood                   — 3–5 words describing the atmosphere
10. Keywords               — 5–10 words from the piece's universe
11. Things to Avoid        — specific visual, cultural, emotional exclusions
```

**Validation conditions:**
- All 11 fields complete
- Cultural Reference is specific (not "African art")
- Target Emotion is one word
- Things to Avoid is specific and actionable

**Announcement:**
```
Creative Brief completed.
Transmitting to Studio Director.
```

---

## Stage 3 — Studio Director

**Role:** [00-role-studio-director.md](00-role-studio-director.md)
**Objective:** Review the Creative Brief, initialize the project dashboard, and activate the Art Director.

**Input:**
- Completed Creative Brief

**Output:**
- Status Dashboard with all 13 stages tracked
- Project initialized

**Announcement:**
```
Creative Brief validated.
Studio Director: Activating Art Director.
```

---

## Stage 4 — Art Director

**Role:** [02-role-art-director.md](02-role-art-director.md)
**Objective:** Transform the Creative Brief into a complete artistic brief.

**Input:**
- Completed Creative Brief from Stage 2

**Output — Art Director Handover Document:**
```
- Artwork title
- Two-line short story (final version, minimum 2 drafts)
- Dominant emotion (one word — from Creative Brief)
- Cultural anchor (specific tradition)
- Subject description (precise, paintable)
- Composition notes (placement, orientation)
- Lighting direction (single source)
- Color mapping (palette colors to elements)
- Texture / medium
- Art style reference (named artist or movement)
- Negative direction (from Creative Brief + additions)
```

**Validation conditions:**
- Short story through minimum 2 drafts
- Dominant emotion is one word
- Cultural reference is specific
- Subject description is detailed enough to paint from

**Announcement:**
```
Art Director completed.
Transmitting to Studio Director → Prompt Master.
```

**Handover template:** [07-handover.md → Section A](07-handover.md)

---

## Stage 5 — Prompt Master V1

**Role:** [03-role-prompt-master.md](03-role-prompt-master.md)
**Objective:** Produce the first structured prompt draft from the Art Director Handover Document.

**Input:**
- Art Director Handover Document (complete)

**Output — Prompt Draft V1:**
```
- Master prompt (subject → cultural ref → emotion → style → lighting → texture → skin → colors → DTF Lock)
- Negative prompt (standard + piece-specific)
- Midjourney variant
- DALL-E variant
- Ideogram variant
- Placement notes (T-shirt, hoodie, tote bag)
```

**Note:** V1 proceeds immediately to Self Review (Stage 6). It is never the final prompt.

**Announcement:**
```
Prompt Draft V1 complete.
Proceeding to Self Review.
```

---

## Stage 6 — Self Review

**Protocol:** [prompt-review.md](prompt-review.md)
**Objective:** The Prompt Master evaluates its own V1 draft before declaring it final.

**Input:**
- Prompt Draft V1

**Process — 7-dimension self-critique:**
```
1. Subject Precision        — Is the subject specific enough?
2. Cultural Precision       — Is the tradition named correctly?
3. Lighting Specificity     — Single source, direction, color, shadow?
4. Color Mapping            — Every palette color assigned to an element?
5. Emotion Alignment        — Every word serving the dominant emotion?
6. DTF Lock Block           — Present verbatim? (binary)
7. Negative Prompt          — Standard + piece-specific negatives complete?
```

**Output:**
- Written self-critique (dimension by dimension)
- Specific changes made V1 → V2
- Prompt Draft V2

**Announcement:**
```
Self Review complete.
V1 → V2 improvements: [2–3 key changes]
Proceeding to Final Prompt.
```

---

## Stage 7 — Final Prompt

**Objective:** Confirm and package the production-ready prompt for image generation.

**Input:**
- Prompt Draft V2 (all 7 self-review dimensions clear)

**Output — Final Prompt Package:**
- Final production prompt (confirmed)
- Negative prompt (final)
- All tool variants (Midjourney, DALL-E, Ideogram)
- Placement notes (all garment types)

**Handover template:** [07-handover.md → Section B](07-handover.md)

**Announcement (Studio Director):**
```
Final Prompt ready.
Transmitting to user for image generation.
Minimum 4 variants required before Brand Guardian Review begins.
```

---

## Stage 8 — Image Generation

**Objective:** Produce image variants using the Final Prompt Package.

**Output:**
- Minimum 4 variants
- Named: `[product-id]-v01.jpg`, `[product-id]-v02.jpg`...

**Note:** Performed by the user using external tools. The GPT waits.

---

## Stage 9 — Brand Guardian Review

**Role:** [04-role-brand-guardian.md](04-role-brand-guardian.md)
**Objective:** Evaluate every variant against the 10-point quality framework AND the Gallery Question.

**Input:**
- Generated image variants (minimum 4)

**Scoring:**
```
5 dimensions × 2 points = 10 points maximum
Minimum passing score: 9/10
```

**Gallery Question (mandatory after scoring):**
```
Would this artwork deserve to be exhibited
in a contemporary art gallery?

YES or NO
```

**Approval conditions — BOTH required:**
1. Score ≥ 9/10
2. Gallery Question = YES

**If either fails → automatic rejection**

**Announcement (rejected):**
```
Brand Guardian review completed.
Score: [X]/10 — Gallery: [YES/NO] — REJECTED.
Returning to Prompt Master — Iteration [N].
```

**Announcement (approved):**
```
Brand Guardian validation completed.
Score: [X]/10 — Gallery: YES — APPROVED.
Transmitting to Studio Director → Validation.
```

---

## Stage 10 — Validation

**Objective:** Formally record the approved artwork.

**Output:**
- Approval record (file, score, gallery verdict, date)
- Handover document archived
- Prompt recorded in [../prompts/prompt-template.md](../prompts/prompt-template.md)

**Handover template:** [07-handover.md → Section C](07-handover.md)

---

## Stage 11 — Product Writer

**Role:** [05-role-product-writer.md](05-role-product-writer.md)
**Objective:** Produce all written content for the product.

**Input:**
- Approved artwork
- Art Director Handover Document
- Creative Brief (audience/purpose context)
- Brand tone-of-voice: [../tone-of-voice.md](../tone-of-voice.md)

**Output — Product Content Package:**
```
- Product title (final)
- Short story (2 lines — from Art Director, unchanged)
- Long story (3–5 paragraphs)
- Shop description
- SEO: title tag + meta description
- Instagram caption
- Facebook post
- Pinterest description
- WhatsApp order message
- Hashtags (max 20)
- Filename, URL slug, alt text
- products.ts entry (ready to paste)
```

**Announcement:**
```
Product Writer completed.
All content ready for website integration.
```

---

## Stage 12 — Website Ready

**Objective:** Integrate the artwork and content into the site.

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

## Stage 13 — Published

**Objective:** The artwork is live and officially part of the collection.

**Output:**
- Live product URL
- Git commit reference
- Production record updated in [../../products/collection-001/workflow/05-final-assets.md](../../products/collection-001/workflow/05-final-assets.md)

**Announcement (Studio Director):**
```
Artwork published.
[Title] is now live at [URL].
Project complete.
```

---

*Ọkpụ Creative System v2.0 — June 2026*
