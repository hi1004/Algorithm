const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const words = fs.readFileSync(file).toString().trim().split('\n');

console.log(words.map(word => word.trim()).join('\n'));
