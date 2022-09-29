const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = fs.readFileSync(file).toString().trim();

console.log(Math.sqrt(Number(n)) * 4);
