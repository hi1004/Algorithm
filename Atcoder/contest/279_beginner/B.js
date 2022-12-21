const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, t] = fs.readFileSync(file).toString().trim().split('\n');

const regex = new RegExp(t, 'g');

console.log(regex.test(n) ? 'Yes' : 'No');
