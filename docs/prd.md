# Product Requirements Document (PRD)

## 1) Product Overview

A responsive web application that lets users authenticate locally and browse Pokémon from the public PokéAPI with search, pagination, and an on-demand details modal (abilities, moves, and forms). The app is designed with a scalable, modular front-end architecture to support future features (favorites, teams, comparisons, offline mode, etc.).

## 2) Problem & Goals

**Problem:** Evaluating candidates’ ability to design a clean, scalable React architecture while delivering a polished user experience for a small but realistic app.

**Goals:**

* Implement local auth (username/password = `admin`/`admin`).
* Persist session and enforce route guards (redirect logic for logged-in/out states).
* Consume PokéAPI with proper pagination and client-side search.
* Show list items with name and sprite; open a modal with rich Pokémon details.
* Ship production-ready scaffolding (tooling, testing, CI-ready) and documentation.

**Non-goals (for v1):** server-side auth, social logins, backend services, complex RBAC.

## 3) User Story (Informal)

“As a Pokédex fan, I want to log into a simple web app and quickly find Pokémon by name. I can scroll through paginated results, and when I click on one, I see its abilities, moves, and forms in a clean modal. When I return later, I’m still logged in so I can pick up where I left off.”

## 4) Success Metrics

* **Functional:**

  * Login validation works exactly for `admin`/`admin`; all other credentials fail with helpful messaging.
  * Session persistence across reload/return visits.
  * List view fetches and paginates via PokéAPI; search narrows results.
  * Details modal displays abilities, moves, and forms reliably.
* **Quality:**

  * Lighthouse performance ≥ 90 (desktop), a11y ≥ 90.
  * Core flows have unit/integration tests (CI-ready).
  * Zero TypeScript build errors; ESLint/Prettier clean.

## 5) Target Users & Use Cases

* **Primary user:** Pokémon enthusiast or evaluator.
* **Key use cases:** quick lookup, scanning through pages, deep-diving into a single Pokémon.

## 6) Scope (V1 Requirements)

### 6.1 Authentication

* **Login screen** with username & password.
* Validate locally against static credentials `admin`/`admin`.
* Show inline validation (required fields, min length, generic wrong creds message).
* On success, write an auth token or flag to chosen storage (Local Storage by default); redirect to **Home**.
* If already logged in and visiting `/login`, redirect to **Home**.
* If not logged in and visiting protected routes, redirect to **/login**.

### 6.2 Main Page (Home)

* Search input (debounced) that filters by name.
* Paginated list of Pokémon using PokéAPI (client consumes `https://pokeapi.co/api/v2/pokemon?offset=…&limit=…`).
* Each list item shows: **sprite image** and **name**.
* Pagination UI: next/prev controls; optional page size control.
* Loading and empty states; error handling with retry.

### 6.3 Detail View (Modal)

* Clicking a Pokémon opens a modal with:

  * **Abilities** (list with name and whether hidden, if available).
  * **Moves** (paginated or virtualized list within the modal to avoid long DOMs).
  * **Forms** (list of form names; link out if relevant).
* Lazy load details (fetch on demand) and cache via query client.
* Close via ESC/click outside/button. Accessible focus trap.

### 6.4 Routing & Guards

* Routes: `/login`, `/` (Home).
* PrivateRoute/Guard pattern using auth state.

### 6.5 State & Data Fetching

* **Server state:** TanStack Query (React Query) for caching, retries, loading states.
* **Local state:** Zustand (lightweight), or React Context where appropriate.

### 6.6 Storage & Session

* Default: Local Storage with a simple `auth_token` or boolean flag.
* Pluggable interface to swap for cookies/indexedDB later.

### 6.7 UI/UX & Accessibility

* Responsive layout (mobile-first).
* Keyboard navigation for login form, list items, and modal.
* ARIA attributes, focus management, labeling.
* Use of a component library for speed/consistency (e.g., shadcn/ui or MUI), plus Tailwind CSS.

### 6.8 Error Handling

* Network failures show non-blocking toast and retry buttons.
* 404 fallback for unrecognized routes.

### 6.9 Performance

* Code-splitting by route and modal.
* Debounced search (250–400ms).
* Virtualized long lists (optional for moves list in modal).
* Use of PKCE not needed; keep bundles small and tree-shaken.

### 6.10 Testing

* **Unit:** utility functions, hooks, and components (Vitest + React Testing Library).
* **Integration:** login flow, route guard, data fetching success/failure.
* **E2E (optional):** Playwright for critical paths.

### 6.11 Documentation

* README with setup, scripts, architecture overview, and decisions.
* This PRD in `/docs/PRD.md`.

## 7) Technical Specification

### 7.1 Tech Stack

* **Language:** TypeScript
* **Bundler/Dev:** Vite
* **UI:** Tailwind CSS + shadcn/ui (Radix UI underneath) or MUI (final choice below)
* **State:** TanStack Query (server), Zustand (client)
* **Routing:** React Router v6+
* **Forms:** React Hook Form + Zod (schema validation)
* **HTTP:** Fetch API with a thin wrapper
* **Tooling:** ESLint, Prettier, Husky + lint-staged
* **Tests:** Vitest, React Testing Library, Playwright (optional)

**Final UI library choice for v1:** **shadcn/ui + Tailwind** (great DX, accessible components, flexible design). MUI can be swapped later with an adapter interface if needed.

### 7.2 Folder Structure (Feature-Sliced + Clean-ish)

```
pokemon-finder/
├─ docs/
│  └─ PRD.md
├─ src/
│  ├─ app/                # App shell, providers, router
│  │  ├─ providers/
│  │  │  ├─ QueryProvider.tsx
│  │  │  └─ ThemeProvider.tsx
│  │  ├─ router/
│  │  │  └─ index.tsx
│  │  └─ App.tsx
│  ├─ features/
│  │  ├─ auth/
│  │  │  ├─ components/
│  │  │  │  └─ LoginForm.tsx
│  │  │  ├─ hooks/
│  │  │  │  └─ useAuth.ts
│  │  │  └─ services/
│  │  │     └─ authService.ts
│  │  └─ pokemon/
│  │     ├─ components/
│  │     │  ├─ PokemonCard.tsx
│  │     │  ├─ PokemonList.tsx
│  │     │  └─ PokemonDetailModal.tsx
│  │     ├─ hooks/
│  │     │  ├─ usePokemonList.ts
│  │     │  └─ usePokemonDetail.ts
│  │     └─ services/
│  │        └─ pokemonClient.ts
│  ├─ entities/
│  │  └─ pokemon.ts       # types/zod schemas for API entities
│  ├─ pages/
│  │  ├─ LoginPage.tsx
│  │  └─ HomePage.tsx
│  ├─ shared/
│  │  ├─ components/
│  │  │  ├─ SearchInput.tsx
│  │  │  ├─ Pagination.tsx
│  │  │  └─ UiPrimitives.tsx
│  │  ├─ hooks/
│  │  │  └─ useLocalStorage.ts
│  │  ├─ libs/
│  │  │  ├─ http.ts       # fetch wrapper
│  │  │  ├─ store.ts      # Zustand store(s)
│  │  │  └─ query.ts      # query keys/helpers
│  │  ├─ styles/
│  │  │  └─ index.css
│  │  └─ utils/
│  │     └─ format.ts
│  ├─ index.css
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ .husky/
├─ public/
├─ tests/
│  ├─ e2e/
│  └─ unit/
├─ .eslint.cjs
├─ .prettierrc
├─ vitest.config.ts
├─ playwright.config.ts (optional)
├─ package.json
└─ README.md
```

### 7.3 API & Data Contracts

* **List endpoint:** `GET https://pokeapi.co/api/v2/pokemon?offset={number}&limit={number}`

  * **Response:** `{ count, next, previous, results: [{ name, url }] }`
  * For sprites, fetch the detail endpoint per item or infer ID from URL and compose official sprite URL (e.g., `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png`).
* **Detail endpoint:** `GET https://pokeapi.co/api/v2/pokemon/{name or id}`

  * **We surface:** `abilities[]`, `moves[]`, `forms[]`, `sprites` (for image), and core stats if desired (optional).

### 7.4 Auth & Storage

* A minimal `authService` with:

  * `login(username, password)` → sets `auth_token` in Local Storage if creds match; else throws.
  * `logout()` → clears.
  * `isAuthenticated()` → boolean.
* A `RequireAuth` wrapper for protected routes.

### 7.5 UX Flows (High-level)

1. **Launch** → if `auth_token` exists → redirect to **Home**; else → **Login**.
2. **Login** → validate fields → on success, set token → redirect to **Home**.
3. **Home** → query list (page 1). Search by name (client-side filter on fetched page; optional server-side by fetching by name when exact match typed). Click Pokémon → **Detail modal** → lazy load detail and cache.
4. **Logout** (in header menu) → clear token → redirect to **Login**.

### 7.6 Validation & Forms

* Zod schemas for login fields; show errors on blur and submit.
* Disable submit while processing; show generic error on invalid creds.

### 7.7 Accessibility

* Modal uses focus trap and `aria-modal="true"` with labelled title.
* Buttons have accessible names; images have `alt` text (pokemon name).
* Maintain tab order and keyboard shortcuts (ESC to close modal).

### 7.8 Observability (Optional, Dev Only)

* Simple logger utility with log levels.
* DevTools for TanStack Query and Zustand (dev only).

### 7.9 Security & Privacy

* No actual PII storage beyond a boolean token. Avoid storing raw creds anywhere.
* Use `SameSite` and secure cookies if swapping storage in the future.
* Handle network errors gracefully; no secrets in client.

### 7.10 Internationalization (Optional)

* i18n scaffold with `react-i18next`; default `en`.

## 8) Acceptance Criteria

* Given any incorrect login creds, the app shows validation and blocks access.
* Given `admin`/`admin`, the app logs in, persists session, and redirects to Home.
* Given a direct visit to `/`, if not authenticated, user is redirected to `/login`.
* The Home page shows a paginated list; each item has a sprite and name.
* Clicking an item opens a modal with abilities, moves (scroll/virtualized), and forms.
* Refreshing the page keeps the user logged in until logout.
* Linting/formatting pass; tests run; build succeeds.

## 9) Risks & Mitigations

* **PokéAPI rate limits / latency:** enable query caching, backoff retries, and modest concurrency; add status messaging.
* **Large move lists causing jank:** virtualize long content or paginate within the modal.
* **Unauth state drift:** centralize auth via Zustand + storage sync, use route guards.

## 10) Project Plan & Milestones

* **M1 – Scaffolding & Tooling (Day 0–0.5):** Vite + TS, Tailwind, shadcn/ui, ESLint/Prettier, Husky, Vitest.
* **M2 – Auth (Day 0.5–1):** Login page, local validation, storage, guards.
* **M3 – Pokémon List (Day 1–1.5):** Query list + pagination + search; cards with sprite/name; loading & error states.
* **M4 – Detail Modal (Day 1.5–2):** Lazy fetch details; abilities, moves, forms; accessibility polish.
* **M5 – Tests & Docs (Day 2):** Unit/integration tests; README; final QA.