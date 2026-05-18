# Mindful Coach — Frontend

A calm, chat-style UI for your AI mental coach. Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Talks to the FastAPI backend at `POST /api/chat`.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (includes `npm`)
- The backend running locally (see repo root `api/README.md`)

## Quick start (local dev)

You need **two terminals** — one for the API, one for the UI.

### 1. Start the backend (terminal 1)

From the **repository root**:

```bash
export OPENAI_API_KEY=sk-your-key-here
uv sync
uv run uvicorn api.index:app --reload
```

The API should be up at `http://localhost:8000`.

### 2. Start the frontend (terminal 2)

```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

> In development, Next.js proxies `/api/chat` to `http://127.0.0.1:8000/api/chat`, so you don't need CORS workarounds in the browser.

## Scripts

| Command        | Description                          |
|----------------|--------------------------------------|
| `npm run dev`  | Dev server at http://localhost:3000  |
| `npm run build`| Production build                     |
| `npm run start`| Serve production build               |
| `npm run lint` | Run ESLint                           |

## Deploying on Vercel

From the **repository root** (not `frontend/`):

```bash
npm install -g vercel   # once
vercel
```

Set the **`OPENAI_API_KEY`** environment variable in the Vercel project settings.

The root `vercel.json` routes:

- `/api/chat` → Python FastAPI (`api/index.py`)
- Everything else → Next.js (`frontend/`)

## Project structure

```
frontend/
├── src/
│   ├── app/           # Next.js App Router (layout, page, styles)
│   └── components/
│       └── Chat.tsx   # Main chat UI + API integration
├── next.config.ts     # Dev proxy to FastAPI
└── package.json
```

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `ECONNREFUSED` on send | Start the backend on port 8000 |
| `OPENAI_API_KEY not configured` | Export the key in the terminal running uvicorn |
| Port 8000 in use | `lsof -ti:8000 \| xargs kill -9` then restart the API |

---

Built for the AI Engineer Challenge — happy vibing!
