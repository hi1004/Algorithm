const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let str = fs.readFileSync(file).toString().trim();
console.log(str + 'A');
