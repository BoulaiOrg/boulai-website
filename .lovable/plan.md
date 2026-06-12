## Obiettivo
Restituire all'hero un'estetica enterprise-pharma (sobria, scientifica, "decision-grade") rimuovendo il video MP4 autoplay del logo, e recuperare quell'animazione come breve splash intro mostrata una sola volta all'arrivo sul sito.

## 1. Splash intro one-shot

Nuovo componente `src/components/IntroSplash.tsx`:
- Overlay full-screen `fixed inset-0 z-[100]` su `bg-background`.
- Al centro: lo stesso `<video src="/brand/boulai-logo-animation.mp4" autoPlay muted playsInline />`, larghezza contenuta (max ~360px), nessun loop.
- Logica:
  - Mostrato solo se `sessionStorage.getItem('boulai_intro_seen')` è assente.
  - All'evento `onEnded` del video (fallback: timer 2200ms) → fade-out 400ms → `setVisible(false)` + `sessionStorage.setItem('boulai_intro_seen','1')`.
  - Skippable: click/tap o tasto Esc chiudono immediatamente.
- Accessibilità: `role="dialog" aria-label="BOULAI intro"`, `prefers-reduced-motion` → salta direttamente.
- Montato una sola volta in `src/App.tsx` (fuori dal Router così copre ogni primo accesso).

## 2. Hero: sostituzione del riquadro video

In `src/pages/Index.tsx` (linee 90–103), rimpiazzare il `<FadeIn>` col video con un visual statico SVG coerente con la guideline "solo SVG geometrici/grafi".

Nuovo componente `src/components/HeroEvidenceGraph.tsx`:
- Riquadro `premium-panel bg-foreground` (mantiene il blocco scuro a destra).
- SVG inline ~aspect 16/9 raffigurante un piccolo **grafo causale / evidence map**:
  - Nodi circolari etichettati discreti ("Hypothesis", "Evidence", "Mechanism", "Outcome").
  - Archi sottili con frecce direzionali.
  - 1–2 nodi evidenziati con accento gold (#D4A11E, via token `--primary`).
  - Griglia di sfondo molto leggera, tipografia mono per le label (eyebrow style).
- Nessun movimento aggressivo: solo un sottile `animate-fade-in` all'ingresso (già nello stack) + eventuale pulse molto tenue su un nodo (opzionale).

Questo rispetta i memory rule: dark scientific aesthetic, gold accent, no stock photos, SVG-only.

## 3. Pulizia

- Il file `/public/brand/boulai-logo-animation.mp4` resta in repo (riusato dalla splash).
- Nessuna modifica ad altre sezioni della home.

## Dettagli tecnici

- `IntroSplash` usa `useEffect` per gestire sessionStorage e listener Esc; cleanup in return.
- Transizione overlay: utility Tailwind esistenti (`transition-opacity duration-500`, `opacity-0` quando chiuso, poi `pointer-events-none`).
- Z-index splash sopra Navbar (Navbar è solitamente `z-50`).
- Il video nella splash deve avere `playsInline` e `muted` per consentire autoplay su iOS Safari.
- SVG dell'hero in viewBox `0 0 800 450`, colori via `currentColor` + classi token (`text-background`, `text-primary`) per restare dentro il design system.

## Out of scope
- Nessuna nuova dipendenza (niente Framer Motion aggiuntivo: bastano le keyframes Tailwind già presenti).
- Nessuna modifica al copy dell'hero, alla Navbar o al Footer.
