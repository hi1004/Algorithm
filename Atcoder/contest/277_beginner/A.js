const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, x] = input.shift().split(' ').map(Number);
const [p] = input.slice().map(n => n.split(' ').map(Number));

console.log(p.indexOf(x) + 1);
