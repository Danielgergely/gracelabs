# PROTOTYPE — Grace Labs landing (throwaway)

**Question:** which immersive scroll concept should gracelabs.dev be built on?

Run: `npm run prototype` → http://localhost:4321/ (from the repo root)

## Verdict (11 Nov 2026)
**D · Light + Letter wins** (`variants/combined.js`): the Light Lab beam (smoothest on phones), polaroids for the work section,
and an envelope whose letter is the contact form. Websites & apps + IT support are two equal "Core" cards; photo & video sits below.

Rejected: B (Light Lab alone) and C (Workbench) were folded into D and deleted.

## Kept for later: A · The One Shot
`archive/oneshot/` → http://localhost:4321/archive/oneshot/
One continuous Three.js camera move: desk → into the camera lens → laptop → code assembles a website → back out.
Too heavy for the whole site (laggy on phones: real-time shadows, full-res rendering), but a strong idea for the
**portfolio / "what I've made"** page. If reused: drop shadows, cap pixel ratio at 1.5, render only while scrolling.

## Later: "Take the tour"
Optional button in the Work section (desktop) that plays a short One Shot (desk → lens → laptop) showing 3–4 flagship
projects on the device screens, then returns to the cards. Build once real screenshots exist (MealOS iPad, Workman, Soar in Spirit).
The iris opening of the story cards is the first borrowed piece of A.

## Next
Content pass (copy, real work, photos), then rebuild D properly as the real site (EN/DE/HU, Cloudflare).
