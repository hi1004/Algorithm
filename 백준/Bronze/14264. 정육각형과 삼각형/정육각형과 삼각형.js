const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [input] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const a = Math.sqrt(3) * input;
const b = input;
const answer = (a / 4) * Math.sqrt(4 * Math.pow(b, 2) - Math.pow(a, 2));
console.log(answer);
