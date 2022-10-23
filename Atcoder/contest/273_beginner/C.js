const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(line[0]);
const nums = line[1].split(' ').map(Number);

const unique = arr => [...new Set(arr)];
const count = [];
const processed = unique(nums).sort((a, b) => b - a);
for (let num of nums) {
  if (count[num] === undefined) {
    count[num] = 1;
  } else {
    count[num]++;
  }
}

for (let i = 0; i < N; i++) {
  if (i <= processed.length - 1) {
    console.log(count[processed[i]]);
  } else {
    console.log(0);
  }
}
