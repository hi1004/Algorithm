const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const words = line.slice(1).map(word => word.trim());
words.forEach(word => {
  console.log(word[0] + word[word.length - 1]);
});
