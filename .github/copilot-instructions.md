# Copilot Instructions - Juego de Banderas UE

## Project Overview
This is a Spanish-language quiz game for learning European Union country flags and capitals. Built with React Router v7 (SSR), TypeScript, Tailwind CSS, and deployed on Netlify.

## Architecture & Key Patterns

### React Router v7 File-Based Routing
- Routes defined in `app/routes.ts` using explicit route configuration (not file-based)
- Three main routes: `/` (home), `/game/` (quiz), `/review` (country list)
- SSR enabled by default in `react-router.config.ts`

### State Management Pattern
- Uses `localStorage` for persistence with key from `app/constants/storageKeys.ts`
- Countries selection stored as JSON array under `countriesKey`
- No external state management - relies on React hooks and localStorage

### Data Structure
Countries are defined as static data in `app/utils/countries.ts`:
```typescript
{ flag: "🇪🇸", name: "España", capital: "Madrid" }
```

### Game Flow Architecture
1. **Home (`/`)**: Country selection interface with checkboxes
2. **Game (`/game/`)**: Quiz with flag display and dual dropdowns (country + capital)
3. **Review (`/review`)**: Static display of all countries

### Utility Patterns
- Sorting functions in `app/utils/sort.ts` use `localeCompare()` for Spanish text
- Shuffling using Fisher-Yates algorithm in game component
- Reusable `CountryList` component for displaying country grids

## Development Workflow

### Commands
```bash
bun dev          # Development server
bun build        # Production build
bun start        # Serve production build
bun typecheck    # Type checking + route generation
```

### Key Files to Modify
- Add countries: `app/utils/countries.ts`
- Add routes: `app/routes.ts` + create route file
- Styling: Uses Tailwind v4 with Vite plugin
- Components: `app/components/` for reusable UI

## Spanish Language Conventions
- All UI text is in Spanish
- Use Spanish naming conventions (e.g., "Países Bajos" not "Netherlands")
- Error messages and user feedback in Spanish

## Deployment
- Netlify deployment via `netlify.tom` config
- Build output to `build/client` directory
- Docker support available for alternative deployment

## State Persistence
- Game state survives page refreshes via localStorage
- Selected countries persist between sessions
- Error tracking for retry functionality ("Reiniciar con los errores")

## Component Patterns
- Use TypeScript interfaces for props (see `CountryLisProps`)
- Responsive grids with Tailwind breakpoints
- Emoji flags instead of image assets
- Consistent button styling across routes