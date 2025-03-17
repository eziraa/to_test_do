export function timeAgo(timestamp: string | number | Date): string {
    const now = new Date();
    const past = new Date(timestamp);
    const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);
  
    if (seconds < 60) return "Just now";
  
    const intervals: { [key: string]: number } = {
      minute: 60,
      hour: 3600,
      day: 86400,
      week: 604800,
      month: 2592000,
      year: 31536000,
    };
  
    for (const [unit, value] of Object.entries(intervals).reverse()) {
      const count = Math.floor(seconds / value);
      if (count >= 1) return `${count} ${unit}${count > 1 ? "s" : ""} ago`;
    }
  
    return "A long time ago";
  }
  