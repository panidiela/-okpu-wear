# Stage 3 — Prompt Writing & Generation

> **Pipeline steps covered:** Step 3 (Write the prompt) · Step 4 (Generate variants)
>
> The prompt is not a description of what you want — it is an instruction to a machine.
> Precision matters more than creativity here. The creativity was Stage 1 and 2.

---

## Current Piece

```
Status:      [ ] Not started  [~] In progress  [x] Complete
Piece name:  _______________________________________________
Generation tool used: [ ] Midjourney  [ ] DALL-E 4  [ ] Ideogram  [ ] Other: ______
Date:        _______________________________________________
```

---

## Prompt Build

Assemble the prompt block by block from your `02-art-direction.md` decisions.
Do not skip any block. The DTF Lock is mandatory — copy it verbatim.

### Block 1 — Subject
```
[PASTE FROM 02-art-direction.md — Subject Description]



```

### Block 2 — Cultural Reference
```
inspired by [SPECIFIC TRADITION FROM 02-art-direction.md],



```

### Block 3 — Atmosphere
```
[MOOD ADJECTIVES] atmosphere,



```

### Block 4 — Style Reference
```
painted in the style of [ART REFERENCE FROM 02-art-direction.md],
contemporary African fine art,



```

### Block 5 — Lighting
```
[LIGHTING DESCRIPTION FROM 02-art-direction.md],



```

### Block 6 — Texture
```
[TEXTURE/MEDIUM FROM 02-art-direction.md] texture,



```

### Block 7 — Color
```
deep matte black background,
[COLOR NOTES FROM 02-art-direction.md],
antique gold accents and highlights,
[SKIN TONE DESCRIPTION],



```

### Block 8 — DTF Lock (copy verbatim — never modify)
```
fully transparent background, no white background, no white halo around the artwork,
no rectangular bounding box, no hard edges at the border,
soft faded edges dissolving into full transparency at every boundary,
organic edge dissolution, no border, no frame, no crop,
300 DPI fine detail quality, designed for printing on dark fabric,
DTF print ready, PNG with alpha transparency
```

### Block 9 — Quality Closers
```
gallery quality, museum artwork, fine art, collector's piece,
wearable artwork, limited edition, Collection ORIGINES
```

---

## Full Assembled Prompt — Version 1

```
[Paste your complete assembled prompt here]




```

---

## Negative Prompt — Version 1

```
white background, rectangular frame, hard edges, white halo, background fill,
bounding box, border, frame, logo design, vector art, flat design, cartoon,
anime, watercolor cute, neon colors, pastel, text, watermark, signature,
[ADD PIECE-SPECIFIC NEGATIVES FROM 02-art-direction.md]
```

---

## Tool-Specific Formatting

### Midjourney
```
[Full prompt] --no [negative keywords] --ar 3:4 --style raw --q 2
```

### DALL-E 4
*Note: Avoid brand name references. Describe the style, do not name living artists.*
```
[Adapted prompt — replace artist names with style descriptions]
```

### Ideogram
```
[Full prompt] -- style: REALISTIC -- negative: [negative prompt]
```

---

## Generation Log

Track every generation run. Never delete — the history informs future iterations.

```
--- RUN 01 ---
Date:          _______________
Tool:          _______________
Prompt version: V1
Seeds used:    _______________
Number of variants generated: ___
Files saved as: _______________
First impression: _____________________________________________
Proceed to review? [ ] Yes  [ ] No — revise prompt first
```

```
--- RUN 02 ---
Date:          _______________
Tool:          _______________
Prompt version: ___
What changed from V1: _________________________________________
Seeds used:    _______________
Number of variants generated: ___
Files saved as: _______________
First impression: _____________________________________________
Proceed to review? [ ] Yes  [ ] No — revise prompt further
```

```
--- RUN 03 ---
Date:          _______________
Prompt version: ___
What changed: ________________________________________________
Files saved as: _______________
Proceed to review? [ ] Yes  [ ] No
```

*(Add more runs as needed — there is no limit. Quality is the only deadline.)*

---

## Prompt Version History

Keep every version of the prompt. When you revise, paste the new version below — do not replace the old one.

### Version 2 (if applicable)
**What changed:** ____________________________________________
**Why:** _____________________________________________________
```
[Full revised prompt]
```

### Version 3 (if applicable)
**What changed:** ____________________________________________
**Why:** _____________________________________________________
```
[Full revised prompt]
```

---

## Approval Gate

Before moving to `04-review.md`, confirm:

- [ ] Minimum 4 variants have been generated
- [ ] All variants are saved locally with consistent naming
- [ ] Generation log is filled for each run
- [ ] DTF Lock block was included verbatim in every prompt version
- [ ] At least one round of prompt revision has occurred (V1 is almost never final)

**Sign-off:** _________________________ · Date: _____________

---

*→ Next: `04-review.md`*
