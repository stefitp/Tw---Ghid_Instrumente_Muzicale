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

