const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [c4, a3, a4] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const envelop = 229 * 324 * c4 * 2;
const poster = 297 * 420 * a3 * 2;
const sheet = 210 * 297 * a4;

console.log(((envelop + poster + sheet) * 0.000001).toFixed(6));
