# Sports Prediction Analytics Dashboard

A React-based dashboard for analyzing sports game predictions and results.

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd sports-prediction-analytics
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/     # React components
├── data/          # Data files
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## Features

- Game prediction analysis
- Historical results tracking
- Team performance statistics
- Win/loss record visualization
- Spread analysis tools
- Schedule viewing

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- date-fns
- Lucide React Icons

## Development

To run the development server with hot reload:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

## Data Format

The application expects game data in CSV format with the following columns:

- gameid: Unique identifier for each game
- date: Game date (YYYY-MM-DD)
- time: Game time (HH:MM:SS)
- away_team: Away team name
- home_team: Home team name
- by_points: Point spread
- away_pred: Predicted away team score
- home_pred: Predicted home team score
- won_sims: Win simulation percentage
- avg_margin: Average margin of victory
- actual_win_team: Actual winning team
- away_actual: Actual away team score
- home_actual: Actual home team score
- result_fav_win: Whether favorite won (Y/N)
- week: Game week number