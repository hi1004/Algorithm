const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

const n = input[0];
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input[i + 1].split(' ').map(Number));
}
const answer = arr.map(e => {
  return e[0] + e[1] + (24 - e[2]);
});
console.log(Math.min(...answer));
console.log(Math.max(...answer));
