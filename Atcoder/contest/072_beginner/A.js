const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x, t] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);

console.log(x - t > 0 ? x - t : 0);
