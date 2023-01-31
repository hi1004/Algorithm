const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [T, M] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

T = T >= 12 ? T - 12 : T;
const ans = Math.abs(T * 30 + M * 0.5 - M * 6);
console.log(ans > 180 ? 360 - ans : ans);
