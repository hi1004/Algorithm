const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const [n, k] = line.shift().split(' ').map(Number);
const arr = line[0].split(' ').map(Number);

console.log(arr[k - 1]);
