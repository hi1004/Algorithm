const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, a] = fs.readFileSync(file).toString().trim().split('\n').map(Number);

console.log(n * n - a);
