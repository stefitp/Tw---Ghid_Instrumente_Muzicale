# Stage 6: AI log

## Tools
- Gemini

## Conversations
- [Conversation link](https://share.gemini.google/jVQpXZekDMkT) (Mock REST API setup with json-server, environment configuration, terminal troubleshooting, and async state handling in React)

## Key requests
### 1. Mock API setup and module extraction
- Asked: How to configure json-server on port 3001, extract fetch operations into an api.js module, and read the endpoint from .env.example.
- Got: Installation steps for json-server@0.17.4, the "api" script definition for package.json, and the fetchInstrumente async helper.
- Changed or rejected: Retained the custom endpoint /instrumente and our Romanian data structure (id, nume, invatat, familie) in db.json.

### 2. Troubleshooting startup errors and parallel terminals
- Asked: How to fix the "Missing script: 'api'" error and resolve "Error: listen EADDRINUSE: address already in use :::3001" when running the mock server.
- Got: Clarification on saving package.json properly, checking active background processes on port 3001, and running two distinct terminal sessions for Vite and json-server.
- Changed or rejected: Kept the existing dependency versions in package.json and renamed .env.examples to the standard .env.example.

## What I learned / what did not work
Learned how to run a client and mock backend concurrently across two terminals, how to handle port conflicts (EADDRINUSE), why React needs both loading and error fallbacks when fetching asynchronously, and how to verify endpoint responses directly in the browser and DevTools Network tab.