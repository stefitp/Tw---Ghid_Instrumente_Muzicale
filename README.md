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