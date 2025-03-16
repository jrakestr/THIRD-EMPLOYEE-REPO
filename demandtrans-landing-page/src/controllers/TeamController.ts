// Team Controller
// Handles business logic for team members

import { useEffect, useState } from 'react';
import dataService from '../services/DataService';
import { TeamMember } from '../models/DataModels';

// Custom hook for fetching all team members
export function useTeamMembers() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const data = await dataService.getTeamMembers();
        setMembers(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return { members, loading, error };
}

// Function to refresh team member data
export function refreshTeamData() {
  dataService.clearCacheEntry('teamMembers');
}