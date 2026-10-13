# Stage 3: AI log

## Tools
- Gemini

## Conversations
- [Conversation link](https://share.gemini.google/1fqxbkKYNk1h) (Vite and React setup, fixing accidentally deleted src files, and VS Code folder structure verification)

## Key requests
### 1. Recovering deleted files and setup
- Asked: What to do after accidentally deleting files from src during the Vite template setup.
- Got: Guidance to recreate only the minimal required files (main.jsx, App.jsx, App.css) and the essential code for each.
- Changed or rejected: Adapted App.jsx with the custom musical instruments dataset and computed counters instead of the default template.

### 2. Directory structure validation
- Asked: Verification of the VS Code folder layout to ensure it meets Stage 3 requirements.
- Got: Corrections regarding nested assets folders, moving style and script files to mockup/, and removing duplicate README files.
- Changed or rejected: Kept only App.css, App.jsx, and main.jsx in frontend/src and verified that node_modules is ignored.

## What I learned / what did not work
Learned how Vite structures a React project, how components mount via createRoot into index.html, and how to verify that build tools run without bundle errors.