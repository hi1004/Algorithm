const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const sortedArr = input.sort((a, b) => a - b);
console.log(sortedArr[2]);
