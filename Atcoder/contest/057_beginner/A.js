const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);

console.log(A + B > 23 ? A + (B % 24) - 24 : A + B);
