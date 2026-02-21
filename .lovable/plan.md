

# Critical Redesign: Apple visionOS Spatial Computing UI

## Overview
Complete visual overhaul to achieve a true "spatial computing" aesthetic with realistic glass materials, dynamic backgrounds, and restructured widgets.

## 1. Spatial Environment and Dynamic Background

**`src/index.css`** -- Full theme overhaul:
- Replace the current dark gradient body background with a high-quality, deeply blurred abstract dark gradient (using multiple radial-gradient layers to simulate a rich studio environment with subtle color shifts)
- Update all CSS custom properties for the visionOS palette: deeper blacks, higher-contrast foreground, refined border/glass variables
- Rewrite `.glass`, `.glass-subtle`, `.glass-float` utilities:
  - Backgrounds: extremely translucent (`bg-black/30` or `bg-white/5` equivalents via HSL)
  - Blur: maximum `backdrop-blur` (60px+)
  - Specular highlight: `border-white/10` with `border-t-white/20` for top-edge light simulation
  - Depth: massive soft drop shadows (`shadow-2xl` scale, dark spread)
  - Geometry: `rounded-3xl` for cards

**Dynamic Background Button**: Add a tiny translucent icon button (Lucide `ImageIcon`) in the bottom-left corner of the Index page. Opacity 30%, brightens on hover. Non-functional placeholder for future background uploads.

## 2. Glass Material System

All panels and cards across every component will use the updated `.glass-float` utility which provides:
- `background: hsl(220 15% 10% / 0.3)` (extremely translucent)
- `backdrop-filter: blur(64px) saturate(1.6)`
- `border: 1px solid hsl(0 0% 100% / 0.08)` with brighter top border (`border-top: 1px solid hsl(0 0% 100% / 0.15)`)
- `box-shadow` with large soft black spread for floating depth
- `border-radius: 1.5rem` (rounded-3xl)

## 3. Typography

- Keep Inter font (already imported)
- Ensure tight tracking on headings
- All text crisp white or light gray -- already handled by CSS variables

## 4. Component Changes

### `src/index.css`
- Rebuild body background with layered radial gradients for rich, studio-like depth
- Update glass utilities with specular highlight borders and deeper blur/shadows
- Update `--radius` to support rounded-3xl

### `src/pages/Index.tsx`
- Add the "Dynamic Background" stealth button (ImageIcon) in bottom-left corner
- Ensure title remains "Dashboard", no subtitle, placeholder "Dame..."
- Right column renders exactly 6 cards: MisionActual, UpNext, SmartCalendarGrid, CriticalPath, EnEspera, SmartMail

### `src/components/dashboard/DashboardSidebar.tsx`
- Update to use `glass-float` with `rounded-3xl`
- Increase corner radius on nav buttons to `rounded-2xl`

### `src/components/dashboard/BlackHoleInput.tsx`
- Update card to `glass-float rounded-3xl`
- Send button to `rounded-full`

### `src/components/dashboard/JarvisChat.tsx`
- Message bubbles use updated glass classes with `rounded-2xl`

### `src/components/dashboard/MisionActual.tsx`
- Update to `glass-float rounded-3xl`
- Keep timer, "Completado" button
- Change label to "Current Task + Timebox"
- "Completado" button gets `rounded-2xl`
- Replace "Editar Tiempo" with both an edit-time button and a new "Siguiente Mision" (Next) button with a forward/chevron icon

### `src/components/dashboard/UpNext.tsx`
- Compact pill-shaped glass card (`glass-subtle rounded-full` or `rounded-2xl`)
- Shows "Proxima Mision" label and the next task name

### `src/components/dashboard/SmartCalendarGrid.tsx` -- Major Redesign
- Replace the vertical Gantt blocks with horizontal translucent bars
- Each event bar: `bg-white/10` background, `border-l-4` with a bright neon color (blue, emerald, amber, violet, sky)
- Inside each bar: task name + "Empieza en Xm" countdown text
- Hour labels on the left, bars float to the right
- Clean vertical layout with spacing between bars

### `src/components/dashboard/CriticalPath.tsx`
- Update to `glass-float rounded-3xl`
- Add subtle amber ring/glow

### `src/components/dashboard/EnEspera.tsx`
- Update to `glass-float rounded-3xl`

### `src/components/dashboard/SmartMail.tsx`
- Update to `glass-float rounded-3xl`
- Inner metric cards use `glass-subtle rounded-2xl`

## 5. Files Summary

**Modified files:**
- `src/index.css` -- theme, background, glass utilities
- `src/pages/Index.tsx` -- dynamic background button, layout confirmation
- `src/components/dashboard/DashboardSidebar.tsx` -- rounded-3xl, glass-float
- `src/components/dashboard/BlackHoleInput.tsx` -- rounded-3xl, rounded-full send
- `src/components/dashboard/JarvisChat.tsx` -- updated glass classes
- `src/components/dashboard/MisionActual.tsx` -- "Siguiente Mision" button, rounded-3xl
- `src/components/dashboard/UpNext.tsx` -- pill/compact style
- `src/components/dashboard/SmartCalendarGrid.tsx` -- horizontal translucent bars with neon borders
- `src/components/dashboard/CriticalPath.tsx` -- rounded-3xl
- `src/components/dashboard/EnEspera.tsx` -- rounded-3xl
- `src/components/dashboard/SmartMail.tsx` -- rounded-3xl

**No new files or deletions.**
