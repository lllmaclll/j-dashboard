export const formatDateTime = (thaiDateString: string, language: string): string => {
  const timeMatch = thaiDateString.match(/เวลา\s(\d{2}):(\d{2})\sน\./);
  const dateMatch = thaiDateString.match(/(\d{1,2})\s(\S+)\s(\d{4})/);

  if (!timeMatch || !dateMatch) return thaiDateString;

  const [ , hourStr, minuteStr ] = timeMatch;
  const [ , day, thaiMonth, buddhistYear ] = dateMatch;

  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  const year = parseInt(buddhistYear, 10) - 543;

  const thaiToEnglishMonths: Record<string, string> = {
    'มกราคม': 'January',
    'กุมภาพันธ์': 'February',
    'มีนาคม': 'March',
    'เมษายน': 'April',
    'พฤษภาคม': 'May',
    'มิถุนายน': 'June',
    'กรกฎาคม': 'July',
    'สิงหาคม': 'August',
    'กันยายน': 'September',
    'ตุลาคม': 'October',
    'พฤศจิกายน': 'November',
    'ธันวาคม': 'December',
  };

  const month = thaiToEnglishMonths[thaiMonth] || thaiMonth;

  if (language === 'th') return thaiDateString;

  const monthIndex = Object.values(thaiToEnglishMonths).indexOf(month);
  const date = new Date(year, monthIndex, parseInt(day), hour, minute);

  return date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};
