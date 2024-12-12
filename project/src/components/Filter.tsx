import React from 'react';
import { Search, X } from 'lucide-react';

interface FilterProps {
  value: string;
  onChange: (value: string) => void;
  teams: string[];
}

export function Filter({ value, onChange, teams }: FilterProps) {
  const uniqueTeams = React.useMemo(() => 
    [...new Set(teams)].sort(),
    [teams]
  );

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Filter by team..."
          className="pl-10 pr-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {uniqueTeams.map((team) => (
          <button
            key={team}
            onClick={() => onChange(value === team ? '' : team)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              value === team 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
            }`}
          >
            {team}
          </button>
        ))}
      </div>
    </div>
  );
}