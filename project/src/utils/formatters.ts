import { format, parseISO } from 'date-fns';

export function formatDate(dateStr: string): string {
  if (!dateStr) return 'N/A';
  
  try {
    const date = parseISO(dateStr);
    return format(date, 'MMM d, yyyy');
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'N/A';
  }
}

export function formatTime(timeStr: string): string {
  if (!timeStr) return 'N/A';
  
  try {
    const [hours, minutes] = timeStr.split(':').map(Number);
    if (isNaN(hours) || isNaN(minutes)) return 'N/A';
    return `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;
  } catch (error) {
    console.error('Error formatting time:', error);
    return 'N/A';
  }
}

export function formatPercentage(value: number): string {
  if (typeof value !== 'number' || isNaN(value)) return '0.0%';
  return `${(value * 100).toFixed(1)}%`;
}

export function formatScore(value: number): string {
  if (typeof value !== 'number' || isNaN(value)) return '0.0';
  return value.toFixed(1);
}

export function calculateAccuracy(predicted: number, actual: number): number {
  if (actual === 0 && predicted === 0) return 1;
  if (actual === 0) return 0;
  return Math.max(0, 1 - Math.abs(predicted - actual) / actual);
}

export function parseCSV(content: string): string[][] {
  if (!content?.trim()) return [];
  const lines = content.trim().split('\n');
  return lines.map(line => 
    line.split(',').map(cell => 
      cell.trim().replace(/^["']|["']$/g, '')
    )
  );
}

export function generateCSV(data: any[]): string {
  if (!data?.length) return '';
  const headers = Object.keys(data[0]);
  const rows = data.map(obj => headers.map(header => obj[header]));
  return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
}