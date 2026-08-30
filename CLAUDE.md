# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands
- Build: `pnpm build`
- Dev Server: `pnpm dev`
- Lint: `pnpm lint`
- Preview: `pnpm preview`

## Architecture
- **Frontend**: React 19 + Vite.
- **State Management**: Zustand (`src/store/`).
- **Routing**: React Router (`react-router`).
- **i18n**: i18next (`src/i18n/`).
- **Styling**: Component-level CSS (`*.css`).
- **API Services**: Axios-based services (`src/services/`).
- **Animations**: GSAP (`gsap`, `@gsap/react`).

## Project Structure
- `src/components/`: Reusable UI components (common, product, animation, swipper).
- `src/pages/`: Top-level page components.
- `src/layouts/`: Page wrappers and layout definitions.
- `src/services/`: API interaction logic.
- `src/store/`: Global state stores (auth, theme).
- `src/hooks/`: Custom React hooks.
- `src/utils/`: General utility functions.
- `src/i18n/`: Translation files and configuration.
