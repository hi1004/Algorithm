const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const s = fs.readFileSync(file).toString().trim();

console.log(s.toLowerCase());
