const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const num = (B / A).toFixed(4);

const answer = Math.round(num * 1000) / 1000;
console.log(answer.toFixed(3));
