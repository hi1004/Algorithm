const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);
const answer = Array.from({ length: N }, (_, i) => i + 1);
console.log(answer.reduce((a, b) => a + b, 0));
