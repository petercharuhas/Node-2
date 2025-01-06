function timeWord(timeStr) {
  const hours = parseInt(timeStr.slice(0, 2));
  const minutes = parseInt(timeStr.slice(3, 5));

  // Special cases
  if (timeStr === '00:00') return 'midnight';
  if (timeStr === '12:00') return 'noon';

  // Convert hours
  const hoursWord = {
    0: 'twelve', 1: 'one', 2: 'two', 3: 'three', 4: 'four',
    5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
    10: 'ten', 11: 'eleven', 12: 'twelve',
  };

  // Handle hours
  let hour = hours;
  if (hours > 12) hour = hours - 12;
  const period = hours >= 12 ? 'pm' : 'am';

  // Convert minutes
  const minutesWords = {
    0: 'o'clock', 1: 'oh one', 2: 'oh two', 3: 'oh three',
    4: 'oh four', 5: 'oh five', 6: 'oh six', 7: 'oh seven',
    8: 'oh eight', 9: 'oh nine', 10: 'ten', 11: 'eleven',
    12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
    16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
    20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty'
  };

  let minuteStr = '';
  if (minutes === 0) {
    minuteStr = "o'clock";
  } else if (minutes <= 20) {
    minuteStr = minutesWords[minutes];
  } else {
    const tens = Math.floor(minutes / 10) * 10;
    const ones = minutes % 10;
    minuteStr = minutesWords[tens] + (ones > 0 ? ' ' + hoursWord[ones] : '');
  }

  return `${hoursWord[hour]} ${minuteStr} ${period}`;
}

module.exports = timeWord;