const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const r = +fs.readFileSync(file).toString().trim();

console.log(Math.PI * r ** 2);
console.log(r ** 2 * 2);
