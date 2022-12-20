const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [H, W] = input.shift().split(' ').map(Number);
const arrs = input.slice().map(arr => arr.split('.').join('').trim());
console.log(arrs.join('').length);
