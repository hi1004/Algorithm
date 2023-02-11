const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [s] = fs.readFileSync(file).toString().trim().split(/\s+/);
console.log(10 - s.length);
