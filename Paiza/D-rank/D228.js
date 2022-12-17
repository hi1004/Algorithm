const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

const [S, H] = inputs[0].split(' ').map(Number);
const [T, M] = inputs[1].split(' ').map(Number);

const time = S * 3600 + H * 60;
const currentTime = T * 3600 + M * 60;
console.log(time >= currentTime ? 'Yes' : 'No');
