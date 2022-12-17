const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

const [N, M] = inputs[0].split(' ').map(Number);

const arrs = Array.from(Array(N), () => []);

for (let i = 1; i <= M; i++) {
  const arr = inputs[i].split(' ').map(Number);
  arrs[arr[0] - 1].push(arr[1]);
  arrs[arr[1] - 1].push(arr[0]);
}

arrs.forEach(arr => {
  console.log(arr.length, arr.sort((a, b) => a - b).join(' '));
});
