# Stage 4 — Review, Selection & DTF Verification

> **Pipeline steps covered:** Step 5 (Critique) · Step 6 (Improve prompt) · Step 7 (Select) · Step 8 (DTF check)
>
> This is where honesty matters most.
> A good-looking image that fails DTF is worthless. A mediocre image is also worthless.
> The standard is: gallery quality + print ready. Both. Always.

---

## Current Piece

```
Status:      [ ] Not started  [~] In progress  [x] Complete
Piece name:  _______________________________________________
Variants reviewed: ___  /  ___ total generated
Reviewer:    _______________________________________________
Date:        _______________________________________________
```

---

## Part A — Variant Critique

Score each variant across 5 dimensions. Use 1–5 (1 = fails, 5 = excellent).
Write a specific note for each score — not just the number.

---

### Variant 01

```
File: _______________________________________________

DIMENSION                    SCORE   NOTES
─────────────────────────────────────────────────────
1. Cultural accuracy          /5     _________________
   (Specific? Respectful?)           _________________

2. Visual quality             /5     _________________
   (Depth? Texture? Light?)          _________________

3. Emotional alignment        /5     _________________
   (Matches intended emotion?)       _________________

4. Brand alignment            /5     _________________
   (Feels like Okpu, not generic?)   _________________

5. DTF readiness (visual)     /5     _________________
   (Edges? Halo? Background?)        _________________

TOTAL: ___ / 25

VERDICT: [ ] Strong candidate  [ ] Revise prompt  [ ] Reject

What works:
_____________________________________________________________

What fails:
_____________________________________________________________
```

---

### Variant 02

```
File: _______________________________________________

DIMENSION                    SCORE   NOTES
─────────────────────────────────────────────────────
1. Cultural accuracy          /5     _________________
2. Visual quality             /5     _________________
3. Emotional alignment        /5     _________________
4. Brand alignment            /5     _________________
5. DTF readiness (visual)     /5     _________________

TOTAL: ___ / 25

VERDICT: [ ] Strong candidate  [ ] Revise prompt  [ ] Reject

What works:
_____________________________________________________________

What fails:
_____________________________________________________________
```

---

### Variant 03

```
File: _______________________________________________

DIMENSION                    SCORE   NOTES
─────────────────────────────────────────────────────
1. Cultural accuracy          /5     _________________
2. Visual quality             /5     _________________
3. Emotional alignment        /5     _________________
4. Brand alignment            /5     _________________
5. DTF readiness (visual)     /5     _________________

TOTAL: ___ / 25

VERDICT: [ ] Strong candidate  [ ] Revise prompt  [ ] Reject
```

---

### Variant 04

```
File: _______________________________________________

DIMENSION                    SCORE   NOTES
─────────────────────────────────────────────────────
1. Cultural accuracy          /5     _________________
2. Visual quality             /5     _________________
3. Emotional alignment        /5     _________________
4. Brand alignment            /5     _________________
5. DTF readiness (visual)     /5     _________________

TOTAL: ___ / 25

VERDICT: [ ] Strong candidate  [ ] Revise prompt  [ ] Reject
```

*(Add Variant 05, 06... as needed)*

---

## Part B — Prompt Revision Decision

After scoring all variants:

```
Did any variant score 20+ / 25?  [ ] Yes → proceed to selection  [ ] No → revise prompt

If revising — what specifically needs to change:
_____________________________________________________________
_____________________________________________________________

Return to 03-prompt.md, add a new prompt version, generate again.
Repeat until at least one variant scores 20+ / 25.
```

---

## Part C — Final Selection

```
Selected variant: ___________________________________________
File name:        ___________________________________________
Final score:      ___ / 25

Why this one (not just "it's the best" — be specific):
_____________________________________________________________
_____________________________________________________________

What it does that the others don't:
_____________________________________________________________
```

---

## Part D — DTF Compliance Check

**This check applies to the selected file only.**
Open the file in Photoshop (or equivalent). Verify each item visually.
All 6 must be checked. No exceptions. No "close enough."

```
CHECK                                          STATUS      NOTES
──────────────────────────────────────────────────────────────────
1. Background is 100% transparent             [ ] Pass  [ ] Fail
   (Checkerboard visible behind all edges)          _____________

2. No white halo around the artwork           [ ] Pass  [ ] Fail
   (Zoom to 300% and check every edge)              _____________

3. Edges fade organically to transparency     [ ] Pass  [ ] Fail
   (No hard clip, no uniform edge)                  _____________

4. No rectangular bounding box visible        [ ] Pass  [ ] Fail
   (No box at any zoom level)                       _____________

5. Resolution is min. 300 DPI at print size   [ ] Pass  [ ] Fail
   (Check: Image → Image Size in Photoshop)         _____________

6. Color profile is sRGB                      [ ] Pass  [ ] Fail
   (Check: Edit → Color Profile)                    _____________

OVERALL DTF STATUS: [ ] PASS — ready for production
                    [ ] FAIL — return to generation
```

**If any check fails:**
- Document exactly what failed and how
- Return to `03-prompt.md` and generate a corrected version
- Do not proceed to `05-final-assets.md` with a failing file

```
Failed checks (if any):
_____________________________________________________________

Corrective action taken:
_____________________________________________________________

Re-check date after correction: ____________________________
```

---

## Art Director Sign-Off

```
Reviewed by:   _______________________________________________
Date:          _______________________________________________

[ ] I confirm this artwork meets Ọkpụ gallery quality standards
[ ] I confirm this file passes all DTF compliance checks
[ ] I confirm this piece is ready for mockup production

Signature: ___________________________________________________
```

---

*→ Next: `05-final-assets.md`*
