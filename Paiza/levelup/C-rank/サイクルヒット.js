const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

input.sort((a, b) => b - a);
const arr = new Set(input.filter(n => n !== 0));
console.log(arr.size === 4 ? 'Yes' : 'No');
