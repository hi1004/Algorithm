const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [g1, p1] = input[0].split(' ').map(Number);
const [g2, p2] = input[1].split(' ').map(Number);

const price1 = p1 / g1;
const price2 = p2 / g2;
console.log(price1 < price2 ? '1' : '2');
