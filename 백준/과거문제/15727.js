const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let number = fs.readFileSync(file).toString().trim();

console.log(Math.ceil(number / 5));
