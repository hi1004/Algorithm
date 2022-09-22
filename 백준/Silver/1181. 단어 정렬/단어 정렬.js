const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');
const n = Number(line.shift());
const words = line.map(word => word.trim());
words.sort();

const arr = words.filter((item, index) => {
  return words.indexOf(item) === index;
});

console.log(arr.sort((a, b) => a.length - b.length).join('\n'));
