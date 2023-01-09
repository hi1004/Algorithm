const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [x, y] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const str = 'atcoder';
console.log(str.slice(x - 1, y));
