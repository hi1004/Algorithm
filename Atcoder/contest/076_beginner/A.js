const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [R, G] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);
console.log(G * 2 - R);
