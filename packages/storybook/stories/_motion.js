/**
 * Motion tokens — shared microinteraction system
 * Based on Emil Kowalski's design-engineering principles (animations.dev).
 *
 * Rules baked in here:
 *  - Strong CUSTOM easing curves (built-in CSS easings are too weak)
 *  - Never `transition: all` — always specific properties
 *  - Entrances use ease-out (instant feedback); never ease-in for UI
 *  - Press feedback: scale(0.97) on :active (subtle, 0.95–0.98)
 *  - Durations stay < 300ms for UI
 *  - Origin-aware popovers (scale from trigger via --mcd-origin)
 *  - Respect prefers-reduced-motion (keep opacity, drop movement)
 *  - Hover effects gated behind (hover: hover) and (pointer: fine)
 */

export const EASING = {
  out: 'cubic-bezier(0.23, 1, 0.32, 1)',      // strong ease-out for UI
  inOut: 'cubic-bezier(0.77, 0, 0.175, 1)',   // on-screen movement / morph
  drawer: 'cubic-bezier(0.32, 0.72, 0, 1)',   // iOS-like drawer
  hover: 'ease',                               // color/hover changes
};

export const DURATION = {
  press: 140,     // button press feedback (100–160)
  tooltip: 160,   // tooltips, small popovers
  dropdown: 200,  // dropdowns, selects
  modal: 280,     // modals, drawers
};

const CSS = `
/* --- Press feedback (subtle scale) --- */
@media (prefers-reduced-motion: no-preference) {
  .mcd-pressable {
    transition: transform ${DURATION.press}ms ${EASING.out},
                background-color ${DURATION.press}ms ${EASING.out},
                border-color ${DURATION.press}ms ${EASING.out},
                box-shadow ${DURATION.press}ms ${EASING.out};
  }
  .mcd-pressable:active { transform: scale(0.97); }
}
@media (prefers-reduced-motion: reduce) {
  .mcd-pressable { transition: background-color 120ms ${EASING.hover}, border-color 120ms ${EASING.hover}; }
}

/* --- Hover lift (real pointers only) --- */
@media (hover: hover) and (pointer: fine) {
  .mcd-hover-lift { transition: transform ${DURATION.press}ms ${EASING.out}, box-shadow ${DURATION.press}ms ${EASING.out}; }
  .mcd-hover-lift:hover { transform: translateY(-1px); }
}

/* --- Origin-aware popover/dropdown entrance --- */
.mcd-enter {
  animation: mcdEnter ${DURATION.dropdown}ms ${EASING.out} both;
  transform-origin: var(--mcd-origin, top center);
}
@keyframes mcdEnter {
  from { opacity: 0; transform: scale(0.96); }
  to   { opacity: 1; transform: scale(1); }
}

/* --- Tooltip entrance (faster, origin-aware) --- */
.mcd-tip-enter {
  animation: mcdEnter ${DURATION.tooltip}ms ${EASING.out} both;
  transform-origin: var(--mcd-origin, center);
}

/* --- Modal entrance (centered, NOT origin-aware) --- */
.mcd-modal-enter { animation: mcdModalEnter ${DURATION.modal}ms ${EASING.out} both; }
@keyframes mcdModalEnter {
  from { opacity: 0; transform: scale(0.96); }
  to   { opacity: 1; transform: scale(1); }
}
.mcd-overlay-enter { animation: mcdFade ${DURATION.modal}ms ${EASING.hover} both; }
@keyframes mcdFade { from { opacity: 0; } to { opacity: 1; } }

/* --- Reduced motion: keep fades, drop movement/scale --- */
@media (prefers-reduced-motion: reduce) {
  .mcd-enter, .mcd-tip-enter, .mcd-modal-enter { animation: mcdFade 160ms ${EASING.hover} both; }
}
`;

let injected = false;
export function injectMotion() {
  if (injected || typeof document === 'undefined') return;
  if (document.getElementById('mcd-motion')) { injected = true; return; }
  const el = document.createElement('style');
  el.id = 'mcd-motion';
  el.textContent = CSS;
  document.head.appendChild(el);
  injected = true;
}
