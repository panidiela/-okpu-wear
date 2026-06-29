# Ọkpụ GPT — Compiled Files

> Version 2.0 — June 2026

## Architecture

| File | Size | Where it goes |
|------|------|---------------|
| `okpu-custom-gpt-instructions.md` | ~800 words | GPT → Instructions field (paste) |
| `okpu-gpt-knowledge.md` | comprehensive | GPT → Knowledge (upload as file) |
| `okpu-system-prompt.md` | complete reference | Not uploaded — documentation only |

---

## Step 1 — GPT Instructions Field

Open your ChatGPT custom GPT → Configure → Instructions.

Paste the **entire contents** of `okpu-custom-gpt-instructions.md`.

This file defines: GPT identity, personality, the five roles, pipeline overview, Knowledge requirement, and the 12 non-negotiable rules.

It is intentionally short (~800 words). It does not contain scoring frameworks, field definitions, or output formats — those live in Knowledge.

---

## Step 2 — Knowledge Upload

Upload `okpu-gpt-knowledge.md` as a Knowledge file.

This file contains everything the GPT needs to execute each role:
- Brand identity, palette, typography, tone of voice
- 11 Creative Brief fields with full definitions
- Studio Director dashboard format and transition phrases
- Art Director output format
- Prompt Master structure, DTF Lock Block, 7-dimension self-review
- Brand Guardian 10-point scoring, 6-point DTF checklist, Gallery Question, critique format
- Product Writer 15-item output list
- Handover templates between roles
- DTF print rules
- Collections reference

---

## Step 3 — GPT Name and Description

**Name:** Ọkpụ Creative Studio

**Description:** *The official creative AI for Ọkpụ — African wearable art. Governs the full pipeline from concept to published product.*

---

## Updating the GPT

### Quick update (one section changed)

1. Edit the relevant Part in `okpu-gpt-knowledge.md`
2. Update `okpu-system-prompt.md` to match (Section 2 or 4)
3. Re-upload `okpu-gpt-knowledge.md` to Knowledge
4. If the change is behavioral (a rule, not content): also update `okpu-custom-gpt-instructions.md` and re-paste it

### Full recompile (major changes)

Update all three files. Re-paste Instructions. Re-upload Knowledge.

### When the GPT ignores a Knowledge rule

Move that rule into `okpu-custom-gpt-instructions.md`. Instructions take precedence over Knowledge in ChatGPT's behavior hierarchy.

---

## File Map — What Lives Where

| Content | Source file | Compiled into |
|---------|------------|---------------|
| GPT identity and personality | `system/00-overview.md` | Instructions + Knowledge Part 1 |
| Pipeline (13 stages) | `system/01-creative-pipeline.md` | Instructions + Knowledge Part 4 |
| Studio Director role | `system/00-role-studio-director.md` | Instructions + Knowledge Part 5 |
| Creative Brief (11 fields) | `system/00-creative-brief.md` | Knowledge Part 6 |
| Art Director role | `system/02-role-art-director.md` | Knowledge Part 7 |
| Prompt Master + self-review | `system/03-role-prompt-master.md` + `system/prompt-review.md` | Knowledge Part 8 |
| Brand Guardian + gallery Q | `system/04-role-brand-guardian.md` | Knowledge Part 9 |
| Product Writer | `system/05-role-product-writer.md` | Knowledge Part 10 |
| Handover templates | `system/07-handover.md` | Knowledge Parts 7, 8, 9 |
| DTF print rules | `brand/prompts/dtf-rules.md` | Knowledge Part 11 |
| Brand guidelines | `brand/brand-guidelines.md` | Knowledge Part 2 |
| Tone of voice | `brand/tone-of-voice.md` | Knowledge Part 3 |
| Collections | `brand/collections.md` | Knowledge Part 12 |
| Complete technical reference | *(this system)* | `okpu-system-prompt.md` |

---

*Ọkpụ Creative System v2.0 — compiled June 2026*
