const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [str] = fs.readFileSync(file).toString().trim().split(/\s+/);
const groups = str.split('-');
let answer = 0;
groups.forEach((group, i) => {
  let cur = group
    .split('+')
    .map(Number)
    .reduce((a, b) => a + b);
  if (i === 0) answer += cur;
  else answer -= cur;
});
console.log(answer);
