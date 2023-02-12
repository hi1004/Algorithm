const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [str, N] = fs.readFileSync(file).toString().trim().split(/\s+/);
N = Number(N);
console.log(str[N - 1]);
