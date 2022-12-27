const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [v, d] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(Math.floor(d / v));
