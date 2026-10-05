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
