const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ');
const apple = 5;
const N = Number(input[0]);
console.log(apple + N);
