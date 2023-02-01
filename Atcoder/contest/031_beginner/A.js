const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, D] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(Math.max((A + 1) * D, (D + 1) * A));
