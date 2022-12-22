const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(n === 7 ? 'Yes' : 'No');
