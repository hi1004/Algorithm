const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');
const n = input.shift();
const arr = input.slice().map(n => n.split(' ').map(Number));

function swap(arr, idx1, idx2) {
  return ([[arr[idx1], arr[idx2]]] = [[arr[idx2], arr[idx1]]]);
}

let x = 1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i].includes(x)) {
    swap(arr[i], 0, 1);

    x = arr[i][arr[i].indexOf(Number(arr[i].filter(n => n !== x).join('')))];
  }

  continue;
}

console.log(x);
