const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const answer = input.filter(n => n > 1);
console.log(answer.length > 0 ? 'F' : 'S');
