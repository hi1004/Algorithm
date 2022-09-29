const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(fs.readFileSync(file).toString().trim());

console.log((input + 1) * 2, (input + 1) * 3);
