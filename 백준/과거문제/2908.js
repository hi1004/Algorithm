const [n, m] = require('fs').readFileSync('./input.txt', 'utf-8').split(' ');
console.log(
  Math.max(n.split('').reverse().join(''), m.split('').reverse().join(''))
);
