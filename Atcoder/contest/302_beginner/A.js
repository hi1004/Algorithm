const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b] = fs.readFileSync(file).toString().trim().split(' ');
a = BigInt(a);
b = BigInt(b);

const ans = (a + b - 1n) / b;
console.log(ans.toString());
