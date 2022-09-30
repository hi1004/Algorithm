const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const max = Math.max(a, b);
if (a !== b) {
  console.log(`Odd ${max * 2}`);
} else if (a === b) {
  if (a + b === 0) {
    console.log('Not a moose');
  } else {
    console.log(`Even ${a + b}`);
  }
}
