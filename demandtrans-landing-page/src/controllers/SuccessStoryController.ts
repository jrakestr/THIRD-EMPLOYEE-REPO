// Success Story Controller
// Handles business logic for success stories

import { useEffect, useState } from 'react';
import dataService from '../services/DataService';
import { SuccessStory } from '../models/DataModels';

// Custom hook for fetching all success stories
export function useSuccessStories() {
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const data = await dataService.getSuccessStories();
        setStories(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  return { stories, loading, error };
}

// Function to refresh success story data
export function refreshSuccessStoryData() {
  dataService.clearCacheEntry('successStories');
}