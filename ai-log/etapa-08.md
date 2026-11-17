# Stage 8: AI log

## Tools
- Gemini

## Conversations
- [Conversation link](https://share.gemini.google/oLsf0yZuHUZJ) (React Router setup, dynamic detail routes, CSS Modules migration, shared layout state via Outlet context, and styled About catalog)

## Key requests
### 1. Multi-page routing with React Router and CSS Modules refactoring
- Asked: How to configure `react-router-dom` with a shared `Layout`, routes for `/`, `/instrumente/:id`, `/despre`, and `*`, and migrate global styles from `App.css` into isolated `.module.css` files without losing existing `data-testid` attributes.
- Got: `BrowserRouter` setup in `main.jsx`, route definitions in `App.jsx`, shared `constants.js`, `fetchInstrument(id)` in `api.js`, and modularized stylesheets across all components and pages while keeping color tokens and base classes in `index.css`.
- Changed or rejected: Replaced `data-testid="item-title"` with `data-testid="item-link"` on the card `<Link>` as required for automated detail navigation, and preserved our custom 3D animated card styles and interactive mini-piano.

### 2. Troubleshooting module export error and syncing header monitor via Outlet context
- Asked: How to fix `SyntaxError: The requested module '/src/api.js' does not provide an export named 'fetchInstrument'` and keep the Live Session Monitor widget synchronized in the header opposite the piano keys.
- Got: Verification of the `fetchInstrument` export in `api.js` and refactoring `Layout.jsx` + `InstrumentePage.jsx` to share the `instrumente` state via React Router's `Outlet` context (`useOutletContext()`).
- Changed or rejected: Kept the progress bar and counters in the header hero widget rather than duplicating them inside the collection panel.

### 3. Designing the About page instrument encyclopedia
- Asked: How to style `DesprePage.jsx` with a dedicated CSS Module matching the MusicGuide theme, showcasing the project stack and a structured catalog of instruments grouped by acoustic family.
- Got: `DesprePage.jsx` and `DesprePage.module.css` featuring responsive family cards (`Strings`, `Winds`, `Percussion`) color-coded with our CSS variables (`--coarde`, `--suflat`, `--percutie`).
- Changed or rejected: Organized instruments with icons and technical details (string counts, reed/brass types, percussion subtypes) consistent with both light and dark themes.

## What I learned / what did not work
Learned how Single Page Applications switch views without full HTML reloads using `BrowserRouter`, `NavLink` (with `end` on `/`), and `Outlet`, how `useParams()` reads dynamic route IDs to fetch individual items and handle `404` responses, how `useOutletContext()` shares live state between a persistent layout and child routes, and how CSS Modules scope class names locally to avoid collisions.