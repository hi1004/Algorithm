const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, m] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log((m / n) * 100 >= 30 ? 'Yes' : 'No');
