const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [N, S] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

let arr = Array.from({ length: N + 1 }, () => false);
arr[0] = true;

nums.forEach(item => {
  let current = Array.from({ length: N + 1 }, () => false);
  for (let i = 0; i <= S; i++) {
    if (arr[i]) {
      current[i] = true;
      let t0 = i + item;

      if (t0 <= S) {
        current[t0] = true;
      }
    }
  }
  arr = current;
});

if (arr[S]) {
  console.log('Yes');
} else {
  console.log('No');
}
