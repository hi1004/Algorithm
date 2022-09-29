const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n').map(Number);

line.pop();

let result = [];

function solution(arr) {
  let isSame;

  for (let i = 0; i < arr.length; i++) {
    let start = 0;
    let end = arr[i].length - 1;
    while (start <= end) {
      if (arr[i][start] === arr[i][end]) {
        isSame = true;
      } else {
        isSame = false;
        break;
      }

      start++;
      end--;
    }

    result.push(isSame ? 'yes' : 'no');
  }
  return result.join('\n');
}

console.log(solution(line.map(String)));
