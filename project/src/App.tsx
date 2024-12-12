import React, { useState, useMemo, useCallback } from 'react';
import { Table, Filter, Stats, TeamStats, SpreadAnalysis, GameManager, WinLossRecord, Schedule } from './components';
import { parseGameData } from './utils/dataParser';
import { BarChart2, ArrowUpDown, Table as TableIcon, TrendingUp, Activity, Calendar } from 'lucide-react';
import { rawData } from './data/games';
import { Game } from './types/game';

type TabType = 'overview' | 'analysis' | 'schedule' | 'predictions';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [sortField, setSortField] = useState<keyof Game>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [filterTeam, setFilterTeam] = useState('');
  const [spreadAnalysisTeam, setSpreadAnalysisTeam] = useState('');
  const [gameData, setGameData] = useState<Game[]>([]);

  // Parse game data once and memoize
  const games = useMemo(() => {
    try {
      const parsedGames = gameData.length ? gameData : parseGameData(rawData);
      if (!gameData.length) {
        setGameData(parsedGames);
      }
      return parsedGames;
    } catch (error) {
      console.error('Error parsing game data:', error);
      return [];
    }
  }, [gameData]);

  // Memoize unique teams list
  const teams = useMemo(() => 
    [...new Set(games.flatMap(g => [g.home_team, g.away_team]))].sort(),
    [games]
  );

  const handleGameImport = (importedGames: Game[]) => {
    setGameData(prevGames => {
      const gameMap = new Map(prevGames.map(g => [g.gameid, g]));
      importedGames.forEach(game => gameMap.set(game.gameid, game));
      return Array.from(gameMap.values());
    });
  };

  const handleGameUpdate = (updatedGame: Game) => {
    setGameData(prevGames => 
      prevGames.map(game => 
        game.gameid === updatedGame.gameid ? updatedGame : game
      )
    );
  };

  const handleSortChange = useCallback((field: keyof Game) => {
    setSortField(field);
    setSortDirection(current => current === 'asc' ? 'desc' : 'asc');
  }, []);

  const handleTeamFilter = useCallback((team: string) => {
    setFilterTeam(team);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TableIcon },
    { id: 'analysis', label: 'Analysis', icon: Activity },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'predictions', label: 'Predictions', icon: TrendingUp }
  ] as const;

  if (!games.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 flex items-center justify-center">
        <div className="bg-red-500/20 text-red-400 p-8 rounded-xl">
          <h2 className="text-xl font-bold mb-4">No Data Available</h2>
          <p>Unable to load game data. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <header className="bg-gray-800/50 shadow-lg py-6 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <BarChart2 className="w-8 h-8 text-blue-400" />
              <h1 className="text-2xl font-bold">Sports Prediction Analytics</h1>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSortDirection(d => d === 'asc' ? 'desc' : 'asc')}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <ArrowUpDown className="w-4 h-4" />
                Sort {sortDirection.toUpperCase()}
              </button>
            </div>
          </div>

          <div className="flex gap-1 border-b border-gray-700">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors border-b-2 -mb-px ${
                  activeTab === tab.id
                    ? 'text-blue-400 border-blue-400'
                    : 'text-gray-400 border-transparent hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <GameManager
            games={games}
            onImport={handleGameImport}
            onUpdate={handleGameUpdate}
          />
        </div>

        <div className={`transition-opacity duration-300 ${activeTab === 'overview' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <div className="mb-8">
            <WinLossRecord games={games} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <Stats games={games} />
          </div>

          <div className="bg-gray-800/50 rounded-xl shadow-xl p-6 backdrop-blur-sm">
            <div className="mb-6">
              <Filter 
                value={filterTeam}
                onChange={handleTeamFilter}
                teams={teams}
              />
            </div>
            
            <Table 
              data={games}
              sortField={sortField}
              sortDirection={sortDirection}
              onSort={handleSortChange}
              filterTeam={filterTeam}
            />
          </div>
        </div>

        <div className={`transition-opacity duration-300 ${activeTab === 'analysis' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-6">Spread Analysis</h2>
              <SpreadAnalysis 
                games={games} 
                selectedTeam={spreadAnalysisTeam}
                onSelectTeam={setSpreadAnalysisTeam}
              />
            </div>

            {filterTeam && (
              <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-xl font-bold mb-6">Team Performance</h2>
                <TeamStats games={games} selectedTeam={filterTeam} />
              </div>
            )}
          </div>
        </div>

        <div className={`transition-opacity duration-300 ${activeTab === 'schedule' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <div className="mb-6">
            <Filter 
              value={filterTeam}
              onChange={handleTeamFilter}
              teams={teams}
            />
          </div>
          <Schedule games={games} filterTeam={filterTeam} />
        </div>

        <div className={`transition-opacity duration-300 ${activeTab === 'predictions' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-4">Upcoming Predictions</h2>
            <p className="text-gray-400">
              Future game predictions and analysis will be displayed here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;