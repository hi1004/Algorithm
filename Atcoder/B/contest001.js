const input = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

const [m] = input;
const km = m / 1000;
let vv = '';

if (km < 0.1) {
  vv = '00';
} else if (km >= 0.1 && km <= 5) {
  vv = km < 1 ? `0${km * 10}` : km * 10;
} else if (km >= 6 && km <= 30) {
  vv = km + 50;
} else if (km >= 35 && km <= 70) {
  vv = (km - 30) / 5 + 80;
} else {
  vv = 89;
}

//出力
console.log(vv);
