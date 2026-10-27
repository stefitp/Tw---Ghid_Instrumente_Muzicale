# Stage 5: AI log

## Tools
- Gemini

## Conversations
- [Conversation link](https://share.gemini.google/pvrpqVbTMgjA) (Controlled checkbox implementation, light/dark theme switching via data-theme attribute, and light mode studio design polish)

## Key requests
### 1. Controlled checkbox and dynamic theme toggle
- Asked: How to implement a controlled checkbox using `checked` and `onChange` in `InstrumentCard` without console warnings, and how to create a header toggle button that modifies `data-theme` on `document.documentElement`.
- Got: Setup using `checked={instrument.invatat}` with an arrow function handler `onChange={() => onToggle(instrument.id)}`, wrapper `<label>` for broader clickable area, and a theme switcher updating both React state and `document.documentElement.dataset.theme`.
- Changed or rejected: Kept custom naming conventions for musical instruments and ensured accessible labels with `aria-label` on delete buttons.

### 2. Light mode color palette and visual contrast
- Asked: How to optimize CSS variables and color palettes for the light theme (`:root`) so that cards, panel, and typography have balanced contrast, soft shadows, and clean studio aesthetics without breaking the dark hero header.
- Got: Refined CSS custom properties for light mode using off-white surfaces (`#f5f3ef`), warm crisp card backgrounds, high-contrast dark text (`#1a1714`), dedicated amber accents, and protected dark styling for the header via explicit variables.
- Changed or rejected: Retained the concert stage background image and interactive mini-piano visual styling intact across both themes.

## What I learned / what did not work
Learned why React requires both `checked` and `onChange` on form inputs to prevent read-only warnings, how modifying `data-theme` on `<html>` allows clean global CSS variable overrides, and how decoupling hero header styles from root theme variables preserves readability in light mode.