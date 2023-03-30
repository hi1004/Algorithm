const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [x, a, b] = fs.readFileSync(file).toString().trim().split('\n').map(Number);

console.log((x - a) % b);
