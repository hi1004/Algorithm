const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const arr = fs.readFileSync(file).toString().trim().split(' ').map(Number);

console.log(arr.sort((a, b) => a - b).join(' '));
