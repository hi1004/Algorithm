const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, products] = fs.readFileSync(file).toString().trim().split('\n');
products = products.split(' ').map(Number);

let answer = 'No';

for (let i = 0; i < N; i++) {
  let sum = 0;
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      sum = products[i] + products[j] + products[k];
      if (sum > 1000) {
        sum = 0;
        break;
      }
      if (sum === 1000) {
        answer = 'Yes';
        break;
      }
    }
  }
}

console.log(answer);
