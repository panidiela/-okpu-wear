# Ọkpụ — Master Prompt

> This is the foundational prompt structure for generating Ọkpụ artwork.
> Every image generated for the brand starts from this base and is customized per piece.
> Never use a generic prompt. Always build from the master.

---

## Master Prompt Structure

```
[SUBJECT] — [CULTURAL REFERENCE] — [MOOD & ATMOSPHERE] — [VISUAL STYLE] — [LIGHTING] — [TEXTURE] — [DTF REQUIREMENTS] — [QUALITY MODIFIERS]
```

---

## The Full Master Prompt (Base)

```
A [SUBJECT DESCRIPTION], inspired by [SPECIFIC AFRICAN ART REFERENCE], 
[MOOD DESCRIPTOR] atmosphere, contemporary African fine art, 
painted in the style of [ART REFERENCE], 
dramatic chiaroscuro lighting with [LIGHT SOURCE], 
[TEXTURE DESCRIPTION] texture visible on the surface,
oil painting quality, museum gallery artwork,
deep matte black background that fades to full transparency at the edges,
no rectangular frame, no hard edges, no white halo,
soft organic dissolution of the artwork into transparency,
rich deep brown skin tones, dignified and ceremonial presence,
antique gold accents and highlights,
terracotta and warm earth tones,
fine detail at 300 DPI print resolution,
wearable art for DTF printing on dark fabric,
no white background, fully transparent edges,
gallery quality, collector's piece, limited edition wearable art
```

---

## Customization Fields

### [SUBJECT DESCRIPTION]
The central figure or scene. Be specific about:
- What the subject is (figure, symbol, scene, abstract)
- Their pose, gesture, or action
- What they are wearing or holding
- Their relationship to the viewer

Examples:
- *"a majestic figure wearing an ornate beaded crown, facing left"*
- *"an elder woman with closed eyes and raised hands"*
- *"a warrior at rest, spear grounded, eyes closed"*
- *"a mother and child in profile, surrounded by baobab branches"*

### [SPECIFIC AFRICAN ART REFERENCE]
The cultural anchor. Be precise — not "African art" but a specific tradition.

Examples:
- *"Benin bronze royal portraiture"*
- *"Yoruba Gelede masquerade ceremonial costume"*
- *"Igbo Ukwu metalwork geometric patterns"*
- *"Dogon ancestral figurative sculpture"*
- *"Kuba Kingdom woven textile patterns"*

### [MOOD DESCRIPTOR]
One or two adjectives. These set the emotional register.

- For power: *"solemn, regal"*
- For memory: *"haunting, luminous"*
- For feminine: *"serene, radiant"*
- For ancestral: *"timeless, ceremonial"*
- For diaspora: *"displaced but unbroken"*

### [ART REFERENCE]
Specific painters or artistic movements to borrow the visual language from.

- *"Kehinde Wiley's portraiture style"*
- *"El Anatsui's metallic assemblage texture"*
- *"Rembrandt's chiaroscuro technique"*
- *"Baroque oil painting with African subject matter"*

### [LIGHT SOURCE]
Where the light comes from in the scene.

- *"warm golden rim light from the upper left"*
- *"candlelight emerging from below the face"*
- *"soft dawn light filtering through baobab leaves"*
- *"single spotlight from directly above"*

### [TEXTURE DESCRIPTION]
The surface quality of the artwork itself.

- *"oil on linen canvas"*
- *"dark bronze casting"*
- *"aged leather and hammered copper"*
- *"ink wash on textured paper"*

---

## Collection-Specific Additions

### Collection 001 — ORIGINES
Add to every prompt:
```
Collection ORIGINES visual identity, 
rooted in ancestral African memory,
timeless yet contemporary,
the weight of history carried with dignity
```

---

## DTF Print Lock (always include)

This block must appear in every final prompt — never omit:

```
DTF print ready, transparent background, no white background,
no rectangular bounding box, no white halo,
soft faded edges dissolving into full transparency,
PNG with alpha channel, 300 DPI quality,
designed for printing on dark fabric,
no hard crop, no border, organic edge dissolution
```

---

## Negative Prompt (for tools that support it)

```
white background, rectangular frame, hard edges, white halo, 
logo design, vector art, flat design, cartoon, anime, 
watercolor cute, cheerful, neon colors, pastel, 
clip art, stock illustration, T-shirt graphic template,
text, watermark, signature, border, frame
```

---

*Last updated: June 2026 — Collection 001, ORIGINES*
