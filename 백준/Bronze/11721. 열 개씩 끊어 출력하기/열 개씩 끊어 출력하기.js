const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const str = fs.readFileSync(file).toString().trim();

const words = [];
let word = '';
let count = 0;
for (let i = 0; i < str.length; i++) {
  count++;
  word += str[i];
  if (count % 10 === 0) {
    words.push(word);
    word = '';
  } else if (count === str.length) {
    words.push(word);
  }
}
console.log(words.join('\n'));
