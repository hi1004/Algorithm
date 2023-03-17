const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const N = input.shift();
const arr = input.slice(0).map(v => v.split(' ').map(Number));

let ans = 0;
arr.forEach(n => (ans += n[1] - n[0] + 1));
console.log(ans);
