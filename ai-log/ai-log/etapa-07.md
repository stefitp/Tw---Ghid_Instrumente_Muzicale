# Stage 7: AI log

## Tools
- Gemini

## Conversations
- [Conversation link](https://share.gemini.google/pjzK6ooGp9tJ) (Controlled form implementation, validation, server-persisted CRUD operations, and automated testing attributes)

## Key requests
### 1. API module extension and controlled form with validation
- Asked: How to extend `api.js` with a shared `request` wrapper for `POST`, `PATCH`, and `DELETE`, and how to build a controlled `InstrumentForm` component with client-side validation.
- Got: The `createInstrument`, `updateInstrument`, and `deleteInstrument` helpers (including handling `204 No Content` responses), plus `InstrumentForm.jsx` with controlled state, empty/length validation, `aria-invalid` error highlighting, and double-submit prevention (`disabled` state).
- Changed or rejected: Adapted the form fields to our domain (`nume`, `familie` with options `coarde`, `suflat`, `percutie`) and kept the custom form styling consistent with our existing light/dark theme variables.

### 2. Server-first state updates and automated verification setup
- Asked: How to refactor `handleAdd`, `handleToggle`, and `handleDelete` in `App.jsx` so state updates only after server confirmation, and where to place `data-testid` attributes without breaking existing card designs.
- Got: Async CRUD handlers in `App.jsx` that await API responses before updating React state, the `tw.json` root configuration file, and exact `data-testid` / `data-id` placements across `InstrumentCard.jsx`, `InstrumentList.jsx`, `InstrumentForm.jsx`, and `App.jsx`.
- Changed or rejected: Preserved the custom card structure, animated instrument avatars, and 3D hover effects in `InstrumentCard.jsx` instead of replacing them with a simplified template.

## What I learned / what did not work
Learned how to build controlled React forms using `e.preventDefault()` and inline validation without `alert()`, why UI state should be updated with the server's response (so `json-server` assigns the `id`) rather than optimistic local objects, how to preserve user input when an API request fails (`Failed to fetch`), and how to expose `data-testid` hooks and `tw.json` for automated testing.