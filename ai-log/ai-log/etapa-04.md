# Stage 4: AI log

## Tools
- Gemini

## Conversations
- [Conversation link](https://share.gemini.google/aKzJapIS4vnI) (React components decomposition, passing props, list rendering with keys, and empty list conditional display)

## Key requests
### 1. Component architecture and list rendering
- Asked: How to split the instruments list into InstrumentCard and InstrumentList components and properly use map with keys.
- Got: Component templates with props destructuring and the key attribute placed directly on the top-level card element returned by map.
- Changed or rejected: Kept custom property names (`nume`, `invatat`, `familie`) and specific CSS classes matching the MusicGuide mockup.

### 2. Conditional rendering and empty state
- Asked: How to handle empty data arrays and visually toggle learned instruments.
- Got: Early return pattern returning a paragraph for empty arrays, and a conditional className ternary operator for completed cards.
- Changed or rejected: Adapted the empty message text to "Nu există niciun instrument." and customized badges with musical icons.

## What I learned / what did not work
Learned how data flows downwards via props, why the key prop must reside on the outermost element of an iterator, and how early returns prevent rendering empty containers.
