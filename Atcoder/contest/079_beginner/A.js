const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x] = fs.readFileSync(file).toString().trim().split(/\s+/);
const regex = new RegExp('(\\d)\\1{2,}').test(x);
console.log(regex ? 'Yes' : 'No');
