const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [m, d] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(m % d === 0 ? 'YES' : 'NO');
