const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M] = fs.readFileSync(file).toString().trim().split(' ').map(BigInt);

console.log(((N * M) / 2n).toString());
