const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(inputs[0]);
const a = inputs[1].split(' ').map(Number);

let ans = 0;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      for (let l = k + 1; l < n; l++) {
        for (let m = l + 1; m < n; m++) {
          if (a[i] + a[j] + a[k] + a[l] + a[m] == 1000) ans++;
        }
      }
    }
  }
}
console.log(ans);
