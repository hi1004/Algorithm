const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const a = Number(line.shift());
const nums = line[0].split(' ').map(Number);
const newArr = nums.concat(a);
const str = line.pop();

function soltuion(arr, str) {
  const answer = `${arr.reduce((a, b) => a + b, 0)} ${str}`;
  return answer;
}

console.log(soltuion(newArr, str));
