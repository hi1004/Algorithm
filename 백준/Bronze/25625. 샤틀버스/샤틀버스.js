const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x, y] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(x <= y ? y - x : y + x);
