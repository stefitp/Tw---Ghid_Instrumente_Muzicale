# MusicGuide

An interactive musical instruments catalog to organize and track practice goals.

## Data model

| Field | Type | Notes |
| :--- | :--- | :--- |
| name | text | required, max 100 chars |
| learned | boolean | toggled from the list, default false |
| family | fixed values | Strings, Winds, Percussion |
| category | relation | Acoustic, Electric, Digital (from week 10) |
| user | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Chitară clasică, active, Strings
2. Pian acustic, done, Strings
3. Saxofon alto, active, Winds

## How to run
Open index.html in a browser. No build step, no server.

## AI usage
| Tool | Used for |
| :--- | :--- |
| Gemini | Project setup, initial HTML semantic layout, CSS variables and dark mode configuration |

Details per stage: see the ai-log/ folder.

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

## Verification table

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](README.md) | read |
| S1-R2 | AI usage section | [README.md#ai-usage](README.md#ai-usage) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L10-L63](https://github.com/stefitp/Tw---Ghid_Instrumente_Muzicale/blob/8ebce5d2dccec1f0c99eb202801179e05738b43b/index.html#L10-L63) | open the page |
| S1-R5 | finished card looks different | [style.css#L162-L165](https://github.com/stefitp/Tw---Ghid_Instrumente_Muzicale/blob/8ebce5d2dccec1f0c99eb202801179e05738b43b/style.css#L162-L165) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L181-L185](https://github.com/stefitp/Tw---Ghid_Instrumente_Muzicale/blob/8ebce5d2dccec1f0c99eb202801179e05738b43b/style.css#L181-L185) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css#L188-L197](https://github.com/stefitp/Tw---Ghid_Instrumente_Muzicale/blob/8ebce5d2dccec1f0c99eb202801179e05738b43b/style.css#L188-L197) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [commit 8ebce5d](https://github.com/stefitp/Tw---Ghid_Instrumente_Muzicale/commit/8ebce5d2dccec1f0c99eb202801179e05738b43b) | commit history |
 

## Stage 2: data logic
Plain JavaScript, no DOM. instrumente.js holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

## Verification table - Stage 2

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S2-R1 | JS file linked, logs on page load | [index.html#L70](https://github.com/stefitp/Tw---Ghid_Instrumente_Muzicale/blob/main/index.html#L70) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [instrumente.js#L4-L8](https://github.com/stefitp/Tw---Ghid_Instrumente_Muzicale/blob/main/instrumente.js#L4-L8) | read |
| S2-R3 | list, count, search, add, toggle, delete | [instrumente.js#L11-L69](https://github.com/stefitp/Tw---Ghid_Instrumente_Muzicale/blob/main/instrumente.js#L11-L69) | console output |
| S2-R4 | add rejects empty name and invalid tag | [instrumente.js#L37-L44](https://github.com/stefitp/Tw---Ghid_Instrumente_Muzicale/blob/main/instrumente.js#L37-L44) | last 2 console lines |
| S2-R5 | original array unchanged after add | [instrumente.js#L86](https://github.com/stefitp/Tw---Ghid_Instrumente_Muzicale/blob/main/instrumente.js#L86) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md](README.md), [ai-log/etapa-02.md](ai-log/etapa-02.md) | read |
| S2-R7 | commit "Stage 2" pushed | [commits](https://github.com/stefitp/Tw---Ghid_Instrumente_Muzicale/commits/main) | commit history |

## Stage 3: Vite and React project
The app now lives in frontend/, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## How to run
cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173).

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [ ] Stage 4: components built from data

## Verification table - Stage 3

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S3-R1 | npm run dev starts without errors | [frontend/package.json](frontend/package.json) | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [frontend/src/App.jsx](frontend/src/App.jsx) | edit data, save |
| S3-R3 | data from README, not from the example | [frontend/src/App.jsx](frontend/src/App.jsx) | compare with README |
| S3-R4 | stage 1 styles reused | [frontend/src/App.css](frontend/src/App.css) | look at the page |
| S3-R5 | node_modules ignored, build passes | [frontend/.gitignore](frontend/.gitignore) | npm run build |
| S3-R6 | README Stage 3 section + AI log | [README.md](README.md), [ai-log/etapa-03.md](ai-log/etapa-03.md) | read |
| S3-R7 | commit "Stage 3" pushed | [commit history](https://github.com/stefitp/Tw---Ghid_Instrumente_Muzicale/commits/main) | commit history |

## Stage 4: components
The list is rendered from the data, through two components
- `InstrumentList` receives the whole array and renders one card per item
- `InstrumentCard` receives a single item through props and displays it

## Status
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [ ] Stage 5: local state and events

## Verification table - Stage 4

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S4-R1 | 2+ components in src/components/ | [frontend/src/components/](frontend/src/components/) | open folder |
| S4-R2 | card receives data through props | [frontend/src/components/InstrumentCard.jsx](frontend/src/components/InstrumentCard.jsx) | read |
| S4-R3 | map + key={id}, no console warnings | [frontend/src/components/InstrumentList.jsx](frontend/src/components/InstrumentList.jsx) | F12, Console |
| S4-R4 | message for empty list | [frontend/src/components/InstrumentList.jsx](frontend/src/components/InstrumentList.jsx) | set array to [] |
| S4-R5 | state changes the card look | [frontend/src/components/InstrumentCard.jsx](frontend/src/components/InstrumentCard.jsx) | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | [README.md](README.md), [ai-log/etapa-04.md](ai-log/etapa-04.md) | read |
| S4-R7 | commit "Stage 4" pushed | [commit history](https://github.com/stefitp/Tw---Ghid_Instrumente_Muzicale/commits/main) | commit history |