const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim();

const answer = [...input].map(Number).reduce((a, b) => a + b, 0);
console.log(answer);
