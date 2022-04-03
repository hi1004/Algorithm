const [year] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

const leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
const answer = leapYear ? 1 : 0;
console.log(answer);
