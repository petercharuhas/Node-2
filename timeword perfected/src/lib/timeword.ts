/**
 * Converts a 24-hour time string to spoken words
 * @param timeStr - A string in format "HH:MM" (24-hour)
 * @returns The time expressed in words
 */
export function timeToWords(timeStr: string): string {
  if (!timeStr.match(/^([01][0-9]|2[0-3]):[0-5][0-9]$/)) {
    throw new Error('Invalid time format. Expected "HH:MM" in 24-hour format.');
  }
  
  const [hourStr, minuteStr] = timeStr.split(':');
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  
  // Handle special cases
  if (hour === 0 && minute === 0) return 'midnight';
  if (hour === 12 && minute === 0) return 'noon';
  
  // Convert hour to words
  let hourWord = getHourWord(hour);
  
  // Convert minute to words
  let minuteWord = getMinuteWord(minute);
  
  // Determine AM/PM
  const period = hour >= 12 ? 'pm' : 'am';
  
  // Format the result
  if (minute === 0) {
    return `${hourWord} o'clock ${period}`;
  }
  
  return `${hourWord} ${minuteWord} ${period}`;
}

/**
 * Converts an hour number to its word representation
 */
function getHourWord(hour: number): string {
  // Convert 24-hour to 12-hour format
  const hour12 = hour % 12 || 12;
  
  const hourWords: Record<number, string> = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten', 
    11: 'eleven',
    12: 'twelve'
  };
  
  return hourWords[hour12];
}

/**
 * Converts a minute number to its word representation
 */
function getMinuteWord(minute: number): string {
  if (minute === 0) return '';
  
  // Handle single-digit minutes (01-09)
  if (minute < 10) {
    return `oh ${getDigitWord(minute)}`;
  }
  
  // Handle teens (10-19)
  if (minute >= 10 && minute < 20) {
    const teenWords: Record<number, string> = {
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen'
    };
    return teenWords[minute];
  }
  
  // Handle 20-59
  const tensWords: Record<number, string> = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty'
  };
  
  const tens = Math.floor(minute / 10);
  const ones = minute % 10;
  
  if (ones === 0) {
    return tensWords[tens];
  }
  
  return `${tensWords[tens]} ${getDigitWord(ones)}`;
}

/**
 * Converts a single digit to its word representation
 */
function getDigitWord(digit: number): string {
  const digitWords: Record<number, string> = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };
  
  return digitWords[digit];
}