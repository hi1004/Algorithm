const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const m = (b - a) / 400;

const ans = 1 / (1 + Math.pow(10, m));
console.log(ans);
