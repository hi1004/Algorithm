const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, K] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);

let num = 1;
for (let i = 0; i < N; i++) {
  const A = num * 2;
  const B = num + K;
  if (A < B) num = A;
  else num = B;
}
console.log(num);
