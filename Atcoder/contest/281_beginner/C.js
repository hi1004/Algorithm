const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

let [N, T] = inputs[0].split(' ').map(input => BigInt(input));
const times = inputs[1].split(' ').map(input => BigInt(input));

let sum = times.reduce((a, b) => a + b);
let mod = T % sum;
for (let i = 0; i < N; i++) {
  if (mod < times[i]) {
    console.log(i + 1, Number(mod));
    return;
  } else {
    mod = mod - times[i];
  }
}
