const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [H, W] = input[0].split(' ').map(Number);
const [dy, dx] = input[1].split(' ').map(Number);

console.log(H * W - (H - Math.abs(dy)) * (W - Math.abs(dx)));
