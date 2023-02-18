const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(/\s+/);
const answer = input.map(str => str[0]);
console.log(answer.join(''));
