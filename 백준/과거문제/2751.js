const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file, 'utf8').trim().split('\n').map(Number);

const n = input.shift();
let results = '';
input.sort((a, b) => a - b).forEach(num => (results += `${num}\n`));

console.log(results);
