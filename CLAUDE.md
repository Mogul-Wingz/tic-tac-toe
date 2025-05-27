# Tic Tac Toe - Project Guide

## Overview
A React/TypeScript tic-tac-toe game with Matrix-themed visual effects including falling code background and confetti animations.

## Tech Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6.1.0
- **Linting**: ESLint 9.19.0 with TypeScript support
- **Styling**: CSS with custom animations

## Project Structure
```
src/
├── App.tsx                 # Main game component and logic
├── App.css                 # Game styles and layout
├── MatrixBackground.tsx    # Orange falling code animation
├── ConfettiBackground.tsx  # Win celebration particles
├── main.tsx               # React entry point
└── index.css              # Global styles
```

## Key Features
- Classic tic-tac-toe with fire (🔥) for X and ice (❄️) for O
- Matrix-style falling code background in orange
- Confetti animation on win
- Game reset functionality
- Responsive design

## Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Preview production build
npm run preview
```

## Code Patterns
- Uses React hooks (useState, useEffect, useRef)
- TypeScript interfaces for type safety
- Canvas animations for visual effects
- Functional components throughout

## Testing
No test framework currently configured. Consider adding Jest/Vitest for testing game logic.

## Deployment
Static site ready for deployment to any hosting service after `npm run build`.