const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

let appleSum = input[0] * 3 + input[1] * 2 + input[2] * 1;
let bananaSum = input[3] * 3 + input[4] * 2 + input[5] * 1;

console.log(appleSum > bananaSum ? 'A' : appleSum < bananaSum ? 'B' : 'T');
