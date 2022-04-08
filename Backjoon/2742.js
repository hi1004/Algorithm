const [n] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

let arr = [];
for (let i = n; i > 0; i--) {
  arr.push(i);
}
console.log(arr.join('\n'));
