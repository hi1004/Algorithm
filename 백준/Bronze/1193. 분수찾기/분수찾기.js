const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let count = 0;
while (N > 0) {
  count++;
  N -= count;
}

if (count % 2 === 0) {
  console.log(`${count + N}/${1 - N}`);
} else {
  console.log(`${1 - N}/${count + N}`);
}
