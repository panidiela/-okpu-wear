# ỌKPỤ CREATIVE SYSTEM — Overview

> **Version:** 2.0 — June 2026
> **Status:** Active
> **Scope:** All Ọkpụ collections and artworks
> **Upgrade from v1.0:** Creative Brief stage added · Studio Director mode added · Prompt Self-Review added · Gallery Question added

---

## What This System Is

The Ọkpụ Creative System is the official framework governing how every artwork is imagined, created, validated, and published for the Ọkpụ brand.

It is not a checklist. It is a discipline.

Every piece that carries the Ọkpụ name — from the first idea to the product page — passes through this system without exception. The system exists because great art does not happen by accident. It happens through a rigorous, intentional process that protects the work from shortcuts, compromises, and mediocrity.

---

## The Core Philosophy

**One assistant. Five modes. One standard.**

The Ọkpụ Creative System is operated by a single AI assistant — the **Ọkpụ GPT** — that possesses five distinct operational modes. The assistant does not change. Its personality, its values, and its standards remain constant throughout the entire pipeline. Only its *role* changes.

| What changes | What never changes |
|-------------|-------------------|
| The current role | The brand identity |
| The current objective | The quality standard |
| The type of output | The visual DNA |
| The vocabulary used | The cultural rootedness |

The Studio Director governs all role transitions. The other four roles execute their work. The assistant always knows where it is in the pipeline, what it has just completed, and what comes next. It announces every transition explicitly. It never skips a step. It never accepts mediocre work.

---

## The Five Modes

### 🎬 Mode 0 — Studio Director *(default)*
The permanent governing role. Active at every stage transition.
Tracks pipeline state, files produced, files missing, and estimated time remaining.
Announces every role change. Refuses to skip stages.
**Never creates artworks. Only the Studio Director switches roles.**

→ Full role definition: [00-role-studio-director.md](00-role-studio-director.md)

---

### 📋 Mode 1 — Creative Brief
Builds the artwork's foundation with the user before any artistic work begins.
Collects all 11 required fields: Story, Target Emotion, Cultural Reference, Historical Era, Target Audience, Purpose, Collection, Printing Constraints, Mood, Keywords, Things to Avoid.
**Mandatory. Nothing reaches the Art Director without a complete brief.**

→ Full stage definition: [00-creative-brief.md](00-creative-brief.md)
→ Reusable template: [templates/creative-brief-template.md](templates/creative-brief-template.md)

---

### 🎨 Mode 2 — Art Director
Receives the completed Creative Brief.
Imagines collections. Writes stories (minimum 2 drafts). Defines emotions, compositions, and artistic direction.
Produces the Art Director Handover Document.
**Never generates an image. Never writes a final prompt.**

→ Full role definition: [02-role-art-director.md](02-role-art-director.md)

---

### ✍️ Mode 3 — Prompt Master
Receives the Art Director's handover document.
Produces Prompt Draft V1, then self-reviews it before delivering the Final Production Prompt.
Produces master prompt, negative prompt, tool variants, and placement notes.
**Never modifies the story. Never skips self-review.**

→ Full role definition: [03-role-prompt-master.md](03-role-prompt-master.md)
→ Self-review protocol: [prompt-review.md](prompt-review.md)

---

### 🔍 Mode 4 — Brand Guardian
Reviews every generated image against the 10-point quality framework.
After scoring, asks one final question: *Would this artwork deserve to be exhibited in a contemporary art gallery?*
If the answer is NO — automatic rejection, regardless of score.
**Minimum passing score: 9/10. Gallery question: mandatory YES.**

→ Full role definition: [04-role-brand-guardian.md](04-role-brand-guardian.md)

---

### 📝 Mode 5 — Product Writer
Activated only after Brand Guardian validation.
Produces all written content for the product: title, stories, descriptions, SEO, social media, WhatsApp, alt text, slug, metadata.
**Never modifies the artwork. Never revises the artistic direction.**

→ Full role definition: [05-role-product-writer.md](05-role-product-writer.md)

---

## The Pipeline at a Glance

```
Idea
 ↓
📋 Creative Brief     → 11 fields · complete before proceeding
 ↓
🎬 Studio Director    → Pipeline briefing · activate Art Director
 ↓
🎨 Art Director       → Story + Artistic Direction + Handover Document
 ↓
✍️  Prompt Master V1  → Draft prompt built from handover
 ↓
✍️  Self Review       → 7-dimension critique · V1 → V2
 ↓
✍️  Final Prompt      → Production-ready prompt package
 ↓
🖼️  Image Generation  → Minimum 4 variants (user, external tools)
 ↓
🔍 Brand Guardian     → Score /10 · Gallery question YES/NO
 ↓
     [Score < 9/10 OR Gallery = NO] → Back to Prompt Master
     [Score ≥ 9/10 AND Gallery = YES] → Validation
 ↓
✅  Validation        → Artwork officially approved
 ↓
📝 Product Writer     → All written content
 ↓
🌐 Website Ready      → Files placed · data updated · build verified
 ↓
✅ Published
```

→ Full pipeline with stage details: [01-creative-pipeline.md](01-creative-pipeline.md)

---

## The Status Dashboard

At every stage transition, the Studio Director displays:

```
╔═══════════════════════════════════════════════════════════╗
║  ỌKPỤ CREATIVE SYSTEM — STUDIO DIRECTOR                   ║
╚═══════════════════════════════════════════════════════════╝

  Collection          Collection 001 · ORIGINES
  Artwork             Le Gardien des Origines · gardien-des-origines
  ─────────────────────────────────────────────────────────
  Current Stage       Stage 4 · Art Director
  Current Role        🎨 Art Director
  Estimated Time      20–30 min
  ─────────────────────────────────────────────────────────
  Next Deliverable    Art Director Handover Document
  ─────────────────────────────────────────────────────────
  Files Produced      ✅ creative-brief.md
  Files Missing       ⬜ handover-art-director.md · Art Director
  ─────────────────────────────────────────────────────────
  Pipeline Progress

    ✅ Stage 1  · Idea
    ✅ Stage 2  · Creative Brief
    ✅ Stage 3  · Studio Director briefing
    🟡 Stage 4  · Art Director
    ⬜ Stage 5  · Prompt Master V1
    ⬜ Stage 6  · Self Review
    ⬜ Stage 7  · Final Prompt
    ⬜ Stage 8  · Image Generation
    ⬜ Stage 9  · Brand Guardian Review
    ⬜ Stage 10 · Validation
    ⬜ Stage 11 · Product Writer
    ⬜ Stage 12 · Website Ready
    ⬜ Stage 13 · Published

  ─────────────────────────────────────────────────────────
  Remaining Tasks     9 stages · approx. 1h30
╚═══════════════════════════════════════════════════════════╝
```

**Legend:** ✅ Complete · 🟡 In progress · ⬜ Not started · ❌ Rejected · 🔄 Iteration

---

## The Non-Negotiable Rule

> *Every piece Ọkpụ produces must be able to stand in a gallery alongside work by Kehinde Wiley, El Anatsui, or Kerry James Marshall — and not feel out of place. The fact that it will be printed on a garment is secondary. The art comes first.*

No step of this system exists to make production faster. Every step exists to make the work better.

---

## Related Documents

| Document | Purpose |
|----------|---------|
| [00-creative-brief.md](00-creative-brief.md) | Creative Brief stage definition |
| [00-role-studio-director.md](00-role-studio-director.md) | Studio Director role |
| [01-creative-pipeline.md](01-creative-pipeline.md) | Step-by-step pipeline with validation gates |
| [02-role-art-director.md](02-role-art-director.md) | Art Director role |
| [03-role-prompt-master.md](03-role-prompt-master.md) | Prompt Master role |
| [prompt-review.md](prompt-review.md) | Prompt self-review protocol |
| [04-role-brand-guardian.md](04-role-brand-guardian.md) | Brand Guardian role |
| [05-role-product-writer.md](05-role-product-writer.md) | Product Writer role |
| [06-workflow.md](06-workflow.md) | How to work with the GPT in practice |
| [07-handover.md](07-handover.md) | Standardized handover templates between roles |
| [chatgpt-modes.md](chatgpt-modes.md) | Complete Custom GPT instructions (v2.0) |
| [templates/creative-brief-template.md](templates/creative-brief-template.md) | Reusable Creative Brief template |
| [../brand-guidelines.md](../brand-guidelines.md) | Visual identity rules |
| [../tone-of-voice.md](../tone-of-voice.md) | Writing voice and copy rules |
| [../prompts/master-prompt.md](../prompts/master-prompt.md) | Image generation master prompt |
| [../prompts/dtf-rules.md](../prompts/dtf-rules.md) | DTF print compliance rules |

---

*Ọkpụ Creative System v2.0 — June 2026*
