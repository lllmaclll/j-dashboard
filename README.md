# J Dashboard

A smart, modular dashboard application built with **React 19**, **TypeScript**, **Vite**, and powered by the **Bun** runtime. It features real-time air quality, gold pricing, and smart plug control, all in a modern, responsive UI.

## 🚀 Features

- 🔗 **4 Pages**: `/air`, `/air-room`, `/gold`, `/plug`
- 🌫️ Real-time **indoor/outdoor air quality** monitoring
- 🏷️ Hourly **gold price** updates (bar & ornament)
- 🔌 Remote **smart plug** control like a switch
- ⚡ Lightning-fast bundling with **Vite** and **Bun**
- 💅 Styled using **Tailwind CSS** and **DaisyUI**
- 🧠 Clean logic via **custom hooks**
- 📦 Organized with **path aliasing**

---

## 📁 Pages Overview

### `/air`
Displays **outdoor air quality** across multiple locations. Shows:
- `PM2.5`, `PM10`, and `CO`
- Option to view all locations or filter by one

### `/air-room`
Displays **indoor air quality** in **real-time (every 5 seconds)**:
- `PM2.5`, `PM10`, `Temperature`, and `Humidity`

### `/gold`
Displays **gold price** info updated **hourly**:
- Bar gold & ornamental gold
- Direction of price movement (up/down)
- Last updated date

### `/plug`
Displays and controls **smart plug devices**:
- Shows current status
- Toggle on/off like physical switches

---

## 🧪 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd j-dashboard

### 2. Install dependencies

```bash
bun install

### 3. Start the dev server

```bash
bun run dev

🛠 Tech Stack
Category	Tools/Libs
Runtime & Build	Bun, Vite, TypeScript
UI Framework	React 19, Tailwind CSS
UI Components	DaisyUI, React Icons
Animation	Framer Motion
Routing	React Router v7
HTTP Client	Axios
Linting	ESLint with @eslint/js, react-hooks, etc.

🧠 Project Structure
📦 Uses path aliases (configured in vite.config.ts) for clean imports.

🧩 Custom hooks handle reusable logic like polling (e.g. usePolling for fetching AQI/gold).

✅ Strong type safety via TypeScript + ESLint rules.

📜 Scripts
Command	Description
bun run dev	Run dev server
bun run build	Type-check + production build
bun run lint	Lint project with ESLint
bun run preview	Preview production build locally

🛠 Build step includes tsc -b, supporting TypeScript Project References for scalable structure.

📦 Dependency Summary
"dependencies": {
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router": "^7.5.2",
  "axios": "^1.9.0",
  "react-icons": "^5.5.0",
  "tailwindcss": "^4.1.3",
  "daisyui": "^5.0.28",
  "framer-motion": "^12.9.2"
}
"devDependencies": {
  "typescript": "~5.7.2",
  "eslint": "^9.21.0",
  "@vitejs/plugin-react": "^4.3.4",
  "@types/react": "^19.0.10",
  "@types/node": "^22.15.2"
}

📌 Notes
Built entirely using Bun, including dependency resolution (bun install) and runtime (bun run).

React 19 used with modern features and minimal setup via Vite.

Ideal for smart environments (home, office) or dashboard displays.
