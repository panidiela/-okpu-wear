# brand/compiled — GPT Build Output

> These two files are the ready-to-use output for the Ọkpụ Custom GPT on ChatGPT.
> They are compiled from the full `brand/` documentation.
> Do not edit these files directly — edit the source docs and re-compile.

---

## How to Set Up the GPT

### Step 1 — Open ChatGPT and create a new Custom GPT

Go to: chatgpt.com → Explore GPTs → Create → Configure

Recommended model: GPT-4o with DALL-E generation enabled.

---

### Step 2 — Paste the Instructions file

Open: `brand/compiled/okpu-custom-gpt-instructions.md`

Copy the **entire contents** of the file and paste into the **Instructions** field of the Custom GPT.

This file contains:
- The 5 modes and their behavior
- The 13-stage pipeline
- The Studio Director dashboard format
- Transition phrases
- The 12 rules that never break
- Session start behavior
- The standard

**Do not add anything else to the Instructions field.** The full knowledge base is in the Knowledge file.

---

### Step 3 — Upload the Knowledge file

Open: `brand/compiled/okpu-gpt-knowledge.md`

Upload this file in the **Knowledge** section of the Custom GPT configuration.

This file contains:
- Brand vision and identity
- Color palette, typography, logo rules
- Tone of voice with examples
- Creative System v2.0 complete reference
- Creative Brief (all 11 fields with full definitions)
- Art Director role and handover format
- Prompt Master role, DTF Lock block, self-review 7 dimensions
- Brand Guardian role, scoring framework, gallery question, DTF checklist, critique format
- Product Writer output list
- Handover templates (A → B → C)
- DTF print rules (complete)
- Collections reference

---

### Step 4 — Name and describe the GPT

**Name:** Ọkpụ Creative Studio

**Description:** The official creative pipeline for Ọkpụ wearable art — from idea to published product. Operates as Studio Director, Creative Brief, Art Director, Prompt Master, Brand Guardian, and Product Writer.

---

## How to Update the GPT After a Documentation Change

When you modify any file in `brand/system/`, `brand/brand-guidelines.md`, `brand/tone-of-voice.md`, `brand/vision.md`, or `brand/collections.md`:

### Option A — Minimal update (section change)

1. Identify which part of the knowledge base changed
2. Edit the corresponding section in `brand/compiled/okpu-gpt-knowledge.md` directly
3. If the change affects GPT behavior (pipeline, rules, scoring), also edit `brand/compiled/okpu-custom-gpt-instructions.md`
4. Upload the updated file(s) to the GPT Knowledge section
5. Commit: `docs: update compiled GPT files — [what changed]`

### Option B — Full recompile (major system change)

Run a full recompile when:
- The pipeline changes significantly (new stages, new roles)
- A new role is added or removed
- The brand identity changes (color, name, positioning)

Steps:
1. Read all source files in `brand/`
2. Rewrite `brand/compiled/okpu-gpt-knowledge.md` from sources
3. Rewrite `brand/compiled/okpu-custom-gpt-instructions.md` from `brand/system/chatgpt-modes.md`
4. Replace the files in the GPT Knowledge section
5. Re-paste the Instructions field
6. Commit: `docs: recompile GPT files — v[N]`

---

## File Map

| Compiled file | Source files |
|--------------|-------------|
| `okpu-custom-gpt-instructions.md` | `brand/system/chatgpt-modes.md` |
| `okpu-gpt-knowledge.md` (Part 1) | `brand/vision.md` |
| `okpu-gpt-knowledge.md` (Part 2) | `brand/brand-guidelines.md` |
| `okpu-gpt-knowledge.md` (Part 3) | `brand/tone-of-voice.md` |
| `okpu-gpt-knowledge.md` (Parts 4–9) | `brand/system/00-overview.md` · `00-creative-brief.md` · `02-role-art-director.md` · `03-role-prompt-master.md` · `prompt-review.md` · `04-role-brand-guardian.md` · `05-role-product-writer.md` |
| `okpu-gpt-knowledge.md` (Part 10) | `brand/system/07-handover.md` |
| `okpu-gpt-knowledge.md` (Part 11) | `brand/prompts/dtf-rules.md` |
| `okpu-gpt-knowledge.md` (Part 12) | `brand/collections.md` · `src/data/products.ts` |

---

## Notes

- The Instructions file is intentionally short — GPT Instructions fields work best when focused on behavior, not content.
- The Knowledge file handles all the "what" — descriptions, definitions, templates, rules.
- The GPT reads Knowledge when it needs detail that isn't in Instructions.
- If the GPT ever ignores a rule from Knowledge, move that rule into Instructions.
- ChatGPT Knowledge has a file size limit. If `okpu-gpt-knowledge.md` grows too large, split it into `okpu-gpt-knowledge-01.md` and `okpu-gpt-knowledge-02.md` and upload both.

---

*Last compiled: June 2026 — Ọkpụ Creative System v2.0*
