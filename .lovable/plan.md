

# Surgical UI Update: Dashboard Widgets

## Changes Summary

### 1. Center Column -- Title & Input
- **Index.tsx**: Change `"El Agujero Negro"` to `"Dashboard"`, remove the subtitle `<p>` tag entirely
- **BlackHoleInput.tsx**: Change placeholder from `"Volca tu mente aca..."` to `"Dame..."`

### 2. Right Column -- Widget Restructuring

**MisionActual.tsx** (rename label only):
- Change header text from `"Mision Actual + Timebox"` to `"Current Task + Timebox"`
- Keep all timer/completed logic as-is

**SmartCalendarGrid.tsx** (full redesign -- "Floating Timeline"):
- Remove the grid/blocks layout entirely
- Replace with a minimal vertical list: each event is a glowing colored dot, followed by time and title text
- No solid background blocks, no grid lines -- just clean floating entries with whitespace

**New file: CriticalPath.tsx** ("Impacto Futuro"):
- Compact list widget with `AlertTriangle` icon
- Items like "Draft Inversores (Due: Friday)" and "Aprobar Presupuesto (Unblocks: Chan)"
- Subtle warning glow on the card

**EnEspera.tsx**: No changes needed

**New file: SmartMail.tsx**:
- Two glass metric buttons/cards side by side
- "3 Urgentes" with `AlertCircle` warning icon
- "10 Sin Leer" with `Mail` icon

**Delete: NotasRapidas.tsx** -- removed from the right column

**Index.tsx**: Update imports and right column to render 5 cards in order: MisionActual, SmartCalendarGrid, CriticalPath, EnEspera, SmartMail

## Technical Details

Files modified:
- `src/pages/Index.tsx` -- title, subtitle removal, widget imports/layout
- `src/components/dashboard/BlackHoleInput.tsx` -- placeholder text
- `src/components/dashboard/MisionActual.tsx` -- header label change
- `src/components/dashboard/SmartCalendarGrid.tsx` -- full rewrite to floating timeline

Files created:
- `src/components/dashboard/CriticalPath.tsx`
- `src/components/dashboard/SmartMail.tsx`

Files deleted:
- `src/components/dashboard/NotasRapidas.tsx`
