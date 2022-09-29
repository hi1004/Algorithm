const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const [by, bm, bd] = line[0].split(' ').map(Number);
const [cy, cm, cd] = line[1].split(' ').map(Number);

if (cy === by) {
  console.log(0);
} else {
  if (cm < bm || (cm <= bm && cd < bd)) {
    console.log(cy - by + 1 - 2);
  } else {
    console.log(cy - by + 1 - 1);
  }
}

console.log(cy - by + 1);
console.log(cy - by);
