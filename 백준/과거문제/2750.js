const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file, 'utf8').trim().split('\n').map(Number);

const n = input.shift();
const numbers = input;

function bubbleSort(arr) {
  let isSwap;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    isSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return arr.join('\n');
}

console.log(bubbleSort(numbers));

// const numbers = input.sort((a, b) => a - b);
// for (let i = 0; i < n; i++) {
//   console.log(numbers[i]);
// }
