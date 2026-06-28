# Ọkpụ — DTF Print Rules

> DTF (Direct-to-Film) is the printing method used for all Ọkpụ wearable art.
> These rules are non-negotiable. Violating them produces amateur results that contradict the brand.

---

## What is DTF

DTF printing transfers a film-printed design directly onto fabric using heat. Unlike screen printing, it supports full color, fine gradients, and photographic detail. However, it is extremely unforgiving of poor file preparation — halos, hard edges, and rectangular backgrounds are immediately visible on the finished garment.

---

## The Core Problem to Avoid

**The White Halo**

When a design with a rectangular background is printed on dark fabric, the rectangular area of the film shows as a white or light-colored rectangle around the artwork. This is the most common and most damaging error in DTF design.

**Rule: Every Ọkpụ design must have a fully transparent background.**
The artwork must fade into nothing at its edges. There must be zero background fill — not white, not light gray, not any color.

---

## File Requirements

| Parameter | Requirement |
|-----------|-------------|
| Format | PNG with alpha transparency |
| Resolution | Minimum 300 DPI at print size |
| Color mode | RGB (the printer converts — do not convert to CMYK yourself) |
| Background | Fully transparent (alpha = 0 everywhere outside the art) |
| Edge treatment | Soft fade — see below |
| White ink | Preserved in the design for dark fabric printing |

---

## Edge Treatment Rules

### Faded Edges (Required)
All Ọkpụ artwork must dissolve at its boundaries. The art should look as if it has always been part of the fabric — not applied to it.

Techniques:
- **Radial gradient fade:** The outermost elements of the illustration fade to 0% opacity
- **Soft brush erasure:** Irregular, organic fade — not a hard circle or rectangle
- **Textured edge:** The artwork bleeds into noise or grain before disappearing
- **No hard crop:** Never a clean rectangular or circular clip

### What to Avoid
- Hard edges (straight lines where art meets transparency)
- Uniform opacity at borders
- Drop shadows extending to a rectangular bounding box
- White or colored borders around the entire design

---

## Gallery Quality Standards

Ọkpụ artwork is not graphic design. It is fine art applied to fabric.

This means:
- **Depth and dimensionality:** Artwork should have foreground, midground, and background — not a flat vector
- **Painterly texture:** Digital brushwork, grain, ink wash effects — not clean vector fills
- **Fine detail:** Hair, skin texture, fabric folds, sculptural relief — visible at 300 DPI
- **Lighting:** Light sources are intentional. There are highlights and shadows.
- **No cartoonish outlines:** Lines are tools, not borders. They should vary in weight and pressure.

---

## Color in DTF Context

On dark fabric (which is the primary Ọkpụ substrate):
- A white ink layer is printed first, then color on top
- Colors that appear in the artwork must be saturated enough to remain vivid over the white layer
- Gold tones (`#C9A45C` and adjacent) print exceptionally well on black — use them
- Very light grays may disappear or look washed out — test before approving

On light fabric:
- No white ink layer needed
- Off-white `#F7F4EE` backgrounds can be used (but must still fade at edges)

---

## Size Guidelines

| Garment position | Print size |
|-----------------|------------|
| Front center | Max 30 × 30 cm |
| Back full | Max 35 × 45 cm |
| Cap front panel | Max 7 × 5 cm |
| Cap embroidery (alternative) | Vector only, 3–5 colors max |

---

## Pre-Press Checklist

Before sending to print, verify:

- [ ] File is PNG with full alpha transparency
- [ ] Background is 100% transparent (check in Photoshop with checkerboard view)
- [ ] Resolution is 300 DPI at intended print size
- [ ] No white halo or rectangular bounding box visible at any zoom level
- [ ] Edges fade organically to transparency
- [ ] All white elements in the design are intentional white ink areas
- [ ] File has been reviewed at 100% zoom for detail quality
- [ ] Color profile: sRGB

---

## When to Reject a File

Reject and regenerate when:
- Any rectangular or hard-edged boundary is visible
- White halo appears around the artwork
- Resolution is below 300 DPI at print size
- Background is filled with any color
- Artwork looks flat, cartoonish, or lacks depth

---

*Last updated: June 2026 — Collection 001, ORIGINES*
