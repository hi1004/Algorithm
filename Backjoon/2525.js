const input = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .trim()
  .split(/\s+/)
  .map(Number);
const [currentHour, currentMinute, currentTime] = input;
const allMinutes = currentHour * 60 + currentMinute + currentTime;
const cookEndHour = parseInt(allMinutes / 60);
const cookEndMinute = allMinutes % 60;

console.log(cookEndHour >= 24 ? cookEndHour - 24 : cookEndHour, cookEndMinute);

// m += t;
// while (m >= 60) {
//   m -= 60;
//   h += 1;
// }
// h %= 24;

// console.log(h, m);
