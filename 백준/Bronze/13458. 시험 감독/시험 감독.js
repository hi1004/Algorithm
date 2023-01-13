const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(line.shift());
const A = line[0].split(' ').map(Number);
const [B, C] = line[1].split(' ').map(Number);

let count = 0;
for (let i = 0; i < n; i++) {
  if (A[i] <= B) count++;
  else count += Math.floor((A[i] - B) / C) + ((A[i] - B) % C ? 2 : 1);
}
console.log(count);
