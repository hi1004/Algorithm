const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const arr = input.slice(0).map(num => num.split(' ').map(Number));

let result = 0;
const ans = [];
for (let i = 0; i < arr.length; i++) {
  let [a, b] = arr[i];

  result += b - a;

  ans.push(result);
}
console.log(Math.max(...ans));
