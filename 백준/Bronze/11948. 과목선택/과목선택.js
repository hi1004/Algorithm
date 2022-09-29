const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const group1 = line.slice(0, 4).sort((a, b) => b - a);
group1.pop();

const group2 = line.slice(4).sort((a, b) => b - a);
group2.pop();

const result = group1.reduce((a, b) => a + b) + group2[0];
console.log(result);
