const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split('\n').map(BigInt);

let claudia = ((a + b) / 2n).toString();
let natalia = ((a - b) / 2n).toString();
console.log(claudia);
console.log(natalia);
