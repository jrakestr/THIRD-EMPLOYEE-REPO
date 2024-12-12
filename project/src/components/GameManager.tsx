import React, { useState } from 'react';
import { Game } from '../types/game';
import { parseCSV, generateCSV } from '../utils/formatters';
import { Upload, Download, Save, X } from 'lucide-react';

interface GameManagerProps {
  games: Game[];
  onImport: (games: Game[]) => void;
  onUpdate: (game: Game) => void;
}

export function GameManager({ games, onImport, onUpdate }: GameManagerProps) {
  const [editingGame, setEditingGame] = useState<Game | null>(null);
  const [importError, setImportError] = useState<string>('');
  const [selectedGames, setSelectedGames] = useState<Set<number>>(new Set());

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const content = await file.text();
      const rows = parseCSV(content);
      const headers = rows[0];

      // Validate headers
      const requiredHeaders = ['gameid', 'date', 'time', 'away_team', 'home_team'];
      const missingHeaders = requiredHeaders.filter(h => !headers.includes(h));

      if (missingHeaders.length) {
        setImportError(`Missing required headers: ${missingHeaders.join(', ')}`);
        return;
      }

      // Parse data rows
      const importedGames = rows.slice(1).map(row => {
        const game: Partial<Game> = {};
        headers.forEach((header, index) => {
          const value = row[index];
          if (header === 'gameid') game.gameid = parseInt(value);
          else if (header === 'date') game.date = value;
          else if (header === 'time') game.time = value;
          else if (header === 'away_team') game.away_team = value;
          else if (header === 'home_team') game.home_team = value;
          else if (header === 'by_points') game.by_points = parseFloat(value);
          else if (header === 'away_pred') game.away_pred = parseFloat(value);
          else if (header === 'home_pred') game.home_pred = parseFloat(value);
          else if (header === 'won_sims') game.won_sims = parseFloat(value);
          else if (header === 'avg_margin') game.avg_margin = parseFloat(value);
          else if (header === 'actual_win_team') game.actual_win_team = value;
          else if (header === 'away_actual') game.away_actual = parseFloat(value);
          else if (header === 'home_actual') game.home_actual = parseFloat(value);
          else if (header === 'result_fav_win') game.result_fav_win = value === 'Y';
        });
        return game as Game;
      });

      onImport(importedGames);
      setImportError('');
      event.target.value = '';
    } catch (error) {
      setImportError('Error importing file. Please check the format and try again.');
    }
  };

  const handleExport = () => {
    const gamesToExport = selectedGames.size > 0
      ? games.filter(g => selectedGames.has(g.gameid))
      : games;

    const csv = generateCSV(gamesToExport);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `game_records_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleGameSelect = (gameid: number) => {
    const newSelected = new Set(selectedGames);
    if (newSelected.has(gameid)) {
      newSelected.delete(gameid);
    } else {
      newSelected.add(gameid);
    }
    setSelectedGames(newSelected);
  };

  const handleSaveEdit = () => {
    if (editingGame) {
      onUpdate(editingGame);
      setEditingGame(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center">
        <label className="relative inline-flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
          <Upload className="w-4 h-4" />
          Import CSV
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </label>

        <button
          onClick={handleExport}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
        >
          <Download className="w-4 h-4" />
          Export {selectedGames.size ? `(${selectedGames.size})` : 'All'}
        </button>
      </div>

      {importError && (
        <div className="bg-red-500/20 text-red-400 p-4 rounded-lg">
          {importError}
        </div>
      )}

      {editingGame && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl p-6 max-w-lg w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Edit Game</h3>
              <button
                onClick={() => setEditingGame(null)}
                className="text-gray-400 hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Away Team</label>
                  <input
                    type="text"
                    value={editingGame.away_team}
                    onChange={e => setEditingGame({ ...editingGame, away_team: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-700 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Home Team</label>
                  <input
                    type="text"
                    value={editingGame.home_team}
                    onChange={e => setEditingGame({ ...editingGame, home_team: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-700 rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Away Score</label>
                  <input
                    type="number"
                    value={editingGame.away_actual}
                    onChange={e => setEditingGame({ ...editingGame, away_actual: parseFloat(e.target.value) })}
                    className="w-full px-3 py-2 bg-gray-700 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Home Score</label>
                  <input
                    type="number"
                    value={editingGame.home_actual}
                    onChange={e => setEditingGame({ ...editingGame, home_actual: parseFloat(e.target.value) })}
                    className="w-full px-3 py-2 bg-gray-700 rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setEditingGame(null)}
                  className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}