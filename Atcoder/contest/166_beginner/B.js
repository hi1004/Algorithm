const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');
let [N, K] = input[0].split(' ').map(Number);
let sunuke = new Array(N).fill(0);
for (var i = 0; i < K; i++) {
  input[i * 2 + 2]
    .split(' ')
    .map(Number)
    .forEach(v => sunuke[v - 1]++);
}
console.log(sunuke.filter(v => v === 0).length);
