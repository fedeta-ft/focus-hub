

# J.A.R.V.I.S. Executive Dashboard

A premium glassmorphism dashboard designed for an executive CEO with ADHD — maximum clarity, zero clutter.

## Design System
- **Theme**: Dark mode only with deep dark backgrounds (#0a0a0f range)
- **Style**: Glassmorphism — frosted-glass panels with `backdrop-blur`, subtle white/gray borders at ~10% opacity
- **Accent**: Neon orange (#FF6B2C range) used sparingly for active states and CTAs
- **Typography**: Inter font, clean hierarchy
- **Animations**: Smooth hover transitions, subtle glows on interactive elements

## Layout — 3-Column Dashboard

### Left Column: Sidebar Navigation
- Fixed, narrow sidebar with frosted-glass background
- User avatar at top with name/role
- Navigation items with Lucide icons:
  - **Home** (active — neon orange accent indicator)
  - **POLSA**
  - **DS**
  - **Hornero**
  - **Smart Foods**
  - **Configuración** (settings, at bottom)
- Subtle hover effects on menu items

### Center Column: El Agujero Negro & J.A.R.V.I.S.
- **"El Agujero Negro" Input Bar** — prominent glassmorphism input at the top with:
  - Placeholder: "Volcá tu mente acá... (Brain Dump)"
  - Glowing neon-orange send button
  - Microphone icon for voice input
- **J.A.R.V.I.S. Chat Interface** — translucent chat area below with:
  - Frosted-glass message bubbles
  - Sample conversation showing "J.A.R.V.I.S. Insight" responses
  - Clean, minimal chat history layout
  - All static/mock data (no backend)

### Right Column: Focus & Smart Widgets

- **Widget 1 — "Misión Actual"**: Single-task focus card. One large prominent task displayed ("Terminar PPT Smart Foods"), a big satisfying "Completado" button with neon-orange glow, and a smaller "Desglosar" button. No lists — just one task.

- **Widget 2 — "Smart Agenda"**: Visual timeline of the day showing 3-4 upcoming events with times and color-coded indicators. Clean vertical timeline layout.

- **Widget 3 — "Smart Mail"**: Compact metrics card showing email stats — "3 Urgentes" (highlighted) and "10 Sin Leer" with minimal iconography.

## Scope & Notes
- Fully static/frontend-only — all data is mock/hardcoded
- Single-page dashboard, no routing needed beyond the index
- Responsive considerations for the 3-column layout
- All interactions (button clicks, input) will have visual feedback but no backend logic

