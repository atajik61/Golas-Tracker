export const getStreak = (logs) => {
    if (!logs || logs.length === 0) return 0;
  
    // فقط تاریخ‌ها
    const dates = logs
      .map((l) => l.date)
      .sort((a, b) => new Date(b) - new Date(a));
  
    let streak = 1;
  
    for (let i = 0; i < dates.length - 1; i++) {
      const current = new Date(dates[i]);
      const next = new Date(dates[i + 1]);
  
      const diff =
        (current - next) / (1000 * 60 * 60 * 24);
  
      if (diff === 1) {
        streak++;
      } else {
        break;
      }
    }
  
    return streak;
  };