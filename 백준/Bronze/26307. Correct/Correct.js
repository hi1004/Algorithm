const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const [h, m] = input;

console.log((h * 3600 + m * 60 - 9 * 3600) / 60);
