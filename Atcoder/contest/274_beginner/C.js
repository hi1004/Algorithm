const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(lines.shift());
const arrs = lines[0].split(' ').map(Number);

let depth = [0, 0];
for (let i = 0; i < N; i++) {
  let a = arrs[i];
  depth.push(depth[a] + 1);
  depth.push(depth[a] + 1);
}

for (let i = 1; i < 2 * N + 2; i++) {
  console.log(depth[i]);
}
