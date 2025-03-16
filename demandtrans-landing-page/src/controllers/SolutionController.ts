// Solution Controller
// Handles business logic for solutions

import { useEffect, useState } from 'react';
import dataService from '../services/DataService';
import { Solution } from '../models/DataModels';

// Custom hook for fetching all solutions
export function useSolutions() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        setLoading(true);
        const data = await dataService.getSolutions();
        setSolutions(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchSolutions();
  }, []);

  return { solutions, loading, error };
}

// Custom hook for fetching a single solution by ID
export function useSolution(id: string | undefined) {
  const [solution, setSolution] = useState<Solution | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchSolution = async () => {
      try {
        setLoading(true);
        const data = await dataService.getSolutionById(id);
        setSolution(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchSolution();
  }, [id]);

  return { solution, loading, error };
}

// Function to refresh solution data
export function refreshSolutionData() {
  dataService.clearCacheEntry('solutions');
}