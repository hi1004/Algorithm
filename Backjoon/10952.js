const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

let a = [];

for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(' ').map(Number);
  a.push(arr.reduce((acc, cur) => acc + cur));
}
if (a.includes(0)) {
  a.pop();
}
console.log(a.join('\n'));
