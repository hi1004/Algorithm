const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [input, nums] = fs.readFileSync(file).toString().trim().split('\n');
const [N, X] = input.split(' ').map(Number);

function linearSearch(arr) {
  return arr.indexOf(X);
}
const answer = linearSearch(nums.split(' ').map(Number)) !== -1 ? 'Yes' : 'No';
console.log(answer);
