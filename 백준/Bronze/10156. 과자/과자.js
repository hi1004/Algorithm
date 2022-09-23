const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const [K, N, M] = line[0].split(' ').map(Number);

console.log(K * N - M < 0 ? 0 : K * N - M);
