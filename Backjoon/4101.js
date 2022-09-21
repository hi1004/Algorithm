const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
input.pop();
const arr = input.map(num => num.trim().split(' ').map(Number));

arr.forEach(nums => {
  console.log(nums.reduce((a, b) => (a > b ? 'Yes' : 'No')));
});
