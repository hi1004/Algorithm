const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, s, t] = input.shift().split(' ').map(Number);

let x = Number(input.shift());
const w = x;
const changeArr = input.map(Number);

const result = changeArr.map(n => (x += n));
result.unshift(w);
console.log(result.filter(n => s <= n && n <= t).length);
