# ỌKPỤ CREATIVE SYSTEM — Prompt Self-Review

> **Version:** 2.0 — June 2026
> **Position in pipeline:** Stage 6 — between Prompt Master V1 and Final Prompt
> **Role responsible:** Prompt Master (self-critique mode)
> **Input:** Prompt Draft V1
> **Output:** Prompt Draft V2 → Final Production Prompt

---

## What This Stage Is

The Prompt Master does not submit its first draft.

Before any prompt leaves the Prompt Master stage, it must be subjected to a structured self-critique. The Prompt Master reads its own V1 draft as if it were a Brand Guardian — looking for weakness, ambiguity, omission, and risk.

The self-review is not a formality. It is where most prompt failures are caught before they cost an image generation cycle.

A prompt that passes self-review has earned the right to be called Final.

---

## The Self-Review Framework

After completing Prompt Draft V1, the Prompt Master evaluates the draft against 7 dimensions.

---

### Dimension 1 — Subject Precision
*Is the central subject described with enough specificity to be rendered correctly?*

Test: Could two different artists read this prompt and produce the same subject?

| ✅ Strong | ❌ Weak |
|----------|--------|
| "A Yoruba elder woman, seated, facing three-quarters left, wearing deep indigo adire cloth, both hands resting on her knees, eyes closed" | "An African woman sitting, wearing traditional clothing" |

**V1 failure signs:** No pose, no age, no position, clothing described generically.

**V2 improvement:** Replace every vague noun with a specific one.

---

### Dimension 2 — Cultural Precision
*Is the cultural reference named correctly and detailed enough?*

| ✅ Strong | ❌ Weak |
|----------|--------|
| "inspired by the lost-wax bronze casting technique of the Edo Kingdom of Benin, 14th-century royal court portraiture" | "in an African style" |

**V1 failure signs:** "African" used without qualifier. No century or kingdom named.

**V2 improvement:** Name the tradition, the kingdom or region, and the approximate era.

---

### Dimension 3 — Lighting Specificity
*Is the lighting source single, directional, and described with enough detail to be reproduced?*

| ✅ Strong | ❌ Weak |
|----------|--------|
| "single directional light from upper left, warm amber at 2700K, casting long soft shadows to the right, no fill light" | "warm lighting" |

**V1 failure signs:** Multiple sources implied. Light described by mood rather than physics.

**V2 improvement:** Name source, direction, color temperature, shadow behavior.

---

### Dimension 4 — Color Mapping
*Is every Ọkpụ palette color mapped to a specific element?*

Palette: `#0B0B0B` · `#F7F4EE` · `#C9A45C` (gold — once only) · `#A65A3A` · `#B7B2A9`

| ✅ Strong | ❌ Weak |
|----------|--------|
| "deep black #0B0B0B on background and shadows, antique gold #C9A45C on the ceremonial necklace only, terracotta #A65A3A on garment folds" | "rich colors with gold accents" |

**V1 failure signs:** Gold not assigned to a specific element. Palette not mentioned explicitly.

**V2 improvement:** Map each palette color to a named element.

---

### Dimension 5 — Emotion Alignment
*Does every element in the prompt serve the dominant emotion?*

Take the dominant emotion from the Art Director Handover Document. Read every phrase and ask: does this word produce or undermine the target emotion?

| Emotion | Aligned | Misaligned |
|---------|---------|-----------|
| Memory | ancestral, worn, weathered, still | vibrant, dynamic, youthful |
| Defiance | raised chin, direct gaze, unbowed | soft, yielding, gentle |
| Tenderness | soft light, hands touching, quiet | harsh, angular |

**V2 improvement:** Replace every word that fights the dominant emotion.

---

### Dimension 6 — DTF Lock Block
*Is the DTF Lock block present, verbatim, and complete?*

This is binary — the block is either exact or it is not.

```
Required verbatim:
fully transparent background, no white background, no white halo around the artwork,
no rectangular bounding box, no hard edges at the border,
soft faded edges dissolving into full transparency at every boundary,
organic edge dissolution, no border, no frame, no crop,
300 DPI fine detail quality, designed for printing on dark fabric,
DTF print ready, PNG with alpha transparency
```

**V1 failure:** Block absent, shortened, paraphrased, or modified in any way.

---

### Dimension 7 — Negative Prompt Completeness
*Does the negative prompt cover standard brand negatives AND all specific avoidances from the Art Director?*

Check for:
- Standard brand negatives (always required)
- All "Things to Avoid" from the Creative Brief and Art Director
- Any new risks identified during V1 writing

**V1 failure signs:** Missing standard negatives. Negative prompt shorter than 40 words.

---

## The Self-Review Output

After evaluating all 7 dimensions, the Prompt Master produces a written self-critique:

```
═══════════════════════════════
PROMPT SELF-REVIEW — V1 → V2

Artwork:     [Title]
Date:        [Date]

DIMENSION REVIEW
Subject Precision:    [✅ / ⚠️] — [One-line note]
Cultural Precision:   [✅ / ⚠️] — [One-line note]
Lighting Specificity: [✅ / ⚠️] — [One-line note]
Color Mapping:        [✅ / ⚠️] — [One-line note]
Emotion Alignment:    [✅ / ⚠️] — [One-line note]
DTF Lock Block:       [✅ Present / ❌ Missing]
Negative Prompt:      [✅ / ⚠️] — [One-line note]

CHANGES FROM V1 TO V2
— [Specific change and why]
— [Specific change and why]
— [Specific change and why]

V2 STATUS: [Ready for Final Production / Requires further iteration]
═══════════════════════════════
```

---

## V1 → V2 → Final Production Prompt

V2 becomes the Final Production Prompt when all 7 dimensions score ✅.

If after V2 any dimension is still ⚠️, the Prompt Master writes V3 before declaring Final.

There is no limit on internal iterations. The Prompt Master ships nothing it would not defend to the Brand Guardian.

---

## Announcement at Completion

```
Prompt Self-Review complete.
V1 → V2 improvements: [2–3 key changes]
Final Production Prompt ready.
Transmitting to Studio Director.
```

---

## Related Documents

- [03-role-prompt-master.md](03-role-prompt-master.md) — Full Prompt Master role definition
- [07-handover.md → Section B](07-handover.md) — Prompt Package handover template
- [01-creative-pipeline.md](01-creative-pipeline.md) — Full pipeline context

---

*Ọkpụ Creative System v2.0 — June 2026*
