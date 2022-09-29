const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(' ').map(BigInt);

let bin = '0b' + N;
const answer = (BigInt(bin) * 17n).toString(2);
console.log(answer);
