# POC Access Level Organisation Chart

A Vue 3 proof of concept for visualizing organizational access levels and hierarchies.

## Tech Stack

- Vue 3
- Vite
- TypeScript
- SASS
- VueUse (Vue Composition Utilities)

## Prerequisites

- Node.js (v18.16.0 or higher)
- npm (v9.5.1 or higher)

## Setup

1. Clone the repository:
```bash
git clone [repository-url]
cd POC-Access-Level-Organisation-Chart
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── assets/         # Static assets
├── components/     # Vue components
├── styles/         # Global styles and variables
├── types/          # TypeScript type definitions
├── views/          # Page components
└── App.vue         # Root component
```

## Development

- The project uses SASS for styling with a simplified BEM methodology
- Path aliases are configured (use @/ to import from src/)
- TypeScript is configured for type safety