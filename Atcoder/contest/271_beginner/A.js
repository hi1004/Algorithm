const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const answer = N.toString(16).toUpperCase();
console.log(answer.length !== 2 ? '0' + answer : answer);
