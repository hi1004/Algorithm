const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

input.shift();

console.log(input.map(val => `${val} ${val}`).join('\n'));
