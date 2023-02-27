const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n] = fs.readFileSync(file).toString().trim().split(' ').map(Number);
let i = Math.floor(Math.sqrt(n));
while (n % i) i--;
console.log(String(n / i).length);
