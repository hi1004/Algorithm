const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arrs = input.slice(1).map(arr => arr.trim().split(' '));

const nums = Array.from({ length: N }, (num, index) => index + 1);

let results = {};
for (let val of nums) {
  results[val] = val;
}

for (let i = 1; i <= N; i++) {
  let values = [];
  for (let j = 0; j < M; j++) {
    if (i % arrs[j][0] === 0) {
      values.push(arrs[j][1]);
      results[i] = values.join(' ');
    }
  }
}

for (let key in results) {
  console.log(results[key]);
}
