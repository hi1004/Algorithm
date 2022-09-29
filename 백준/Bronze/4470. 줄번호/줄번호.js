const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(line.shift());
const str = line;

// const result = [];
str.forEach((s, i) => console.log(`${i + 1}.`, s));
// str.map((s, i) => result.push(`${i + 1}. ${s}`));
// console.log(result.join('\n'));
