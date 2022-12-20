const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [input] = fs.readFileSync(file).toString().trim().split(' ');

const days = Array.from({ length: 365 }, (n, index) =>
  (index + 1)
    .toString()
    .split(' ')
    .filter(n => n.includes(input))
);
console.log(days.filter(n => n.length).length);
