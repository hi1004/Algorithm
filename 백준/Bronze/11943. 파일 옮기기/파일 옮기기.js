const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [A, B] = input[0].split(' ').map(Number);
const [C, D] = input[1].split(' ').map(Number);

console.log(Math.min(A + D, B + C));
