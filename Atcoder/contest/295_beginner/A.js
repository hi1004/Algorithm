const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, str] = fs.readFileSync(file).toString().trim().split('\n');
const s = 'and not that the you';
let result = 'No';
str.split(' ').map(v => {
  if (s.split(' ').indexOf(v) !== -1) result = 'Yes';
});

console.log(result);
