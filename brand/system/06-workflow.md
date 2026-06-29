# ỌKPỤ CREATIVE SYSTEM — Workflow Guide

> **Version:** 2.0 — June 2026
> How to work with the Ọkpụ GPT in practice.
> The GPT guides you step by step. You never need to manage the pipeline yourself.
> The GPT never skips a step. You only need to respond to what it asks.

---

## Starting a Session

To begin working on a new artwork, open a session with the Ọkpụ GPT and say one of the following:

```
"New artwork. [Collection name]. [Working concept or title]."
"I want to create a new piece for Collection ORIGINES about [concept]."
"Start the creative pipeline for [artwork name]."
```

The GPT will immediately display the status dashboard (Studio Director) and begin the Creative Brief stage.

---

## The Status Dashboard

At every stage transition, the GPT displays this dashboard:

```
═══════════════════════════════════════
ỌKPỤ CREATIVE SYSTEM

Current Role       🎨 Art Director
Current Phase      Collection 001 → Artwork [N]
Status             🟡 In progress
Next Task          [Specific instruction for you]

Pipeline Progress
  ✅ Stage 1  · Idea
  🟡 Stage 2  · Creative Brief
  ⬜ Stage 3  · Studio Director
  ⬜ Stage 4  · Art Director
  ⬜ Stage 5  · Prompt Master V1
  ⬜ Stage 6  · Self Review
  ⬜ Stage 7  · Final Prompt
  ⬜ Stage 8  · Image Generation
  ⬜ Stage 9  · Brand Guardian Review
  ⬜ Stage 10 · Validation
  ⬜ Stage 11 · Product Writer
  ⬜ Stage 12 · Website Ready
  ⬜ Stage 13 · Published
═══════════════════════════════════════
```

**You do not need to manage this dashboard.** The GPT updates it automatically at every transition.

---

## Step-by-Step Workflow

### Stage 1 — You provide the idea

You give the GPT a concept, a word, a cultural reference, or a character name.

**Example:**
```
You: "New piece. Collection ORIGINES. An old fisherman who has never left his village."
```

The GPT acknowledges, enters Art Director mode, and begins Stage 2.

---

### Stage 2 — Art Director

The GPT works with you to build the complete artistic brief.

**The GPT will ask you (in order):**
1. *"What is the dominant emotion this piece must produce?"*
2. *"Is there a specific African cultural tradition you want this rooted in?"*
3. *"Here is a draft short story — does this feel right?"*
4. *"I'll now draft the composition and lighting. Approve or redirect."*

**Your role:** Respond, redirect, approve. You do not need to know what "composition" means — the GPT explains everything in plain language.

**When Art Director is complete, the GPT announces:**
```
Art Director completed.
Switching to Prompt Master.
```

---

### Stage 3 — Prompt Master

The GPT produces the complete Prompt Package without asking you anything. It works from the Art Director Handover Document.

When complete, it presents:
- The master prompt
- The negative prompt
- Tool-specific variants (Midjourney, DALL-E, Ideogram)
- Placement notes

**The GPT announces:**
```
Prompt Master completed.
Waiting for image generation.

Please generate minimum 4 variants using the prompt above.
Use any of the tool-specific versions provided.
Share or describe the results when ready.
```

**Your role:** Copy the prompt, generate images with your preferred tool, come back with at least 4 variants.

---

### Stage 4 — Image Generation (your action)

You generate images outside the GPT using the provided prompts.

**When you return:**
```
You: "Here are 4 variants: [descriptions or image shares]"
```

The GPT enters Brand Guardian mode immediately.

---

### Stage 5 — Brand Guardian Review

The GPT reviews every variant systematically. For each one, it produces the full review format with scores, critique, and DTF checklist.

**If all variants score below 9/10:**
```
Brand Guardian review completed.
Score: [X]/10 — Below threshold.
Specific failures: [list]
Revised prompt provided above.
Returning to Prompt Master — Iteration 2.
```
→ You regenerate images with the revised prompt. Return with new variants.

**If a variant scores 9/10 or above:**
```
Brand Guardian validation completed.
Score: [X]/10 — Artwork approved.
Switching to Product Writer.
```

---

### Stage 6 — Validation

The GPT records the approval and moves immediately to Stage 7. You do not need to do anything.

---

### Stage 7 — Product Writer

The GPT produces the complete Product Content Package automatically. No questions asked — it generates everything from the Art Director Handover Document and the approved artwork.

**Output delivered:**
- Title
- Short story (confirmed)
- Long story
- Shop description
- SEO (title + meta)
- Instagram caption
- Facebook post
- Pinterest description
- WhatsApp message
- Hashtags
- Technical identifiers
- Ready-to-paste `products.ts` entry

**The GPT announces:**
```
Product Writer completed.
Project completed.

All content ready for website integration.
```

---

### Stage 8 — Website Integration (your action)

You place the files and update the data. The GPT provides the integration checklist.

---

## Transition Announcements — Full List

These are the exact phrases the GPT uses at every stage transition. You will always know where you are.

| Announcement | Meaning |
|-------------|---------|
| `Art Director completed. Switching to Prompt Master.` | Stage 2 → Stage 3 |
| `Prompt Master completed. Waiting for image generation.` | Stage 3 → Stage 4 |
| `Brand Guardian review starting.` | Stage 4 → Stage 5 |
| `Score: [X]/10 — Below threshold. Returning to Prompt Master.` | Stage 5 → Stage 3 (iteration) |
| `Brand Guardian validation completed. Switching to Product Writer.` | Stage 5/6 → Stage 7 |
| `Product Writer completed. Project completed.` | Stage 7 → Stage 8 |

---

## Rules the GPT Always Follows

1. **Never skips a stage.** If you try to jump ahead, the GPT redirects.
2. **Never accepts mediocre work.** 8/10 is not 9/10.
3. **Always displays the dashboard at transitions.** You always know where you are.
4. **Never changes the story.** The Art Director's short story is final.
5. **Never removes the DTF Lock block.** Present in every prompt, every time.
6. **Never gives generic cultural references.** Always specific — not "African art."
7. **Announces current role, objective, next role, and remaining steps at every transition.**

---

## What You Can Say at Any Time

| What you say | What happens |
|-------------|-------------|
| `"Where are we?"` | GPT displays the current dashboard |
| `"Show me the full pipeline"` | GPT shows [01-creative-pipeline.md](01-creative-pipeline.md) summary |
| `"Revise the story"` | GPT returns to Art Director mode for story revision |
| `"This prompt needs work"` | GPT re-enters Prompt Master mode |
| `"Skip to Product Writer"` | GPT refuses — Brand Guardian must validate first |
| `"Start over"` | GPT resets to Stage 1, preserving the handover document |

---

## Tips for Efficient Sessions

- **Give the GPT specifics, not generalities.** "A grandmother with deep-set eyes who has seen colonization and its aftermath" is better than "an old woman."
- **Trust the process.** The GPT will ask what it needs. You don't need to anticipate.
- **Generate more than 4 variants.** 8 gives the Brand Guardian more to work with.
- **Use Midjourney for the first round** — it handles the artistic style vocabulary best.
- **When sharing images for review**, describe what you see in each variant — colors, composition, mood — the GPT uses your description to critique effectively.

---

*Ọkpụ Creative System v2.0 — June 2026*
