const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = input.shift();
const nums = input.slice().map(num => num.split(' ').map(Number));

function calcRest(a, b) {
  return a % b;
}

nums.forEach(numArr => {
  const [a, b, c] = numArr;
  let count = 0;
  for (let x = 1; x <= a; x++) {
    for (let y = 1; y <= b; y++) {
      for (let z = 1; z <= c; z++) {
        if (
          calcRest(x, y) === calcRest(y, z) &&
          calcRest(y, z) === calcRest(z, x) &&
          calcRest(z, x) === calcRest(x, y)
        ) {
          count++;
        }
      }
    }
  }

  console.log(count);
});
