const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');
const current = input[0].split(' ').map(Number);

let h = current[0];
let m = current[1];
const t = Number(input[1]);

m += t;
while (m >= 60) {
  m -= 60;
  h += 1;
}
h %= 24;

console.log(h, m);
