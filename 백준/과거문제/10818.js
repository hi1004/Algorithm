let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ');

console.log(Math.min(...arr), Math.max(...arr));
