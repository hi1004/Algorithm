const [n] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');
console.log(n - 544 + 1);
