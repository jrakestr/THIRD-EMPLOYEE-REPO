// Performance Optimizer Utility
// Provides utilities for optimizing performance

// Debounce function to limit how often a function can be called
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>): void {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(later, wait);
  };
}

// Throttle function to limit how often a function can be called
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  
  return function(...args: Parameters<T>): void {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Memoize function to cache results of expensive function calls
export function memoize<T extends (...args: any[]) => any>(
  func: T
): (...args: Parameters<T>) => ReturnType<T> {
  const cache = new Map<string, ReturnType<T>>();
  
  return function(...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>;
    }
    
    const result = func(...args);
    cache.set(key, result);
    
    return result;
  };
}

// Function to optimize image loading
export function optimizeImageLoading(imageUrl: string, width?: number, quality?: number): string {
  // This is a placeholder for actual image optimization logic
  // In a real app, you might use a CDN or image optimization service
  
  // For now, just return the original URL
  return imageUrl;
}

// Function to detect if the browser supports certain performance features
export function detectPerformanceFeatures(): {
  supportsIntersectionObserver: boolean;
  supportsResizeObserver: boolean;
  supportsMutationObserver: boolean;
} {
  return {
    supportsIntersectionObserver: typeof IntersectionObserver !== 'undefined',
    supportsResizeObserver: typeof ResizeObserver !== 'undefined',
    supportsMutationObserver: typeof MutationObserver !== 'undefined'
  };
}