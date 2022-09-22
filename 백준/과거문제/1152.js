const input = require('fs').readFileSync('./input.txt', 'utf8');
let wordsArr = input.trim().split(' ');
let count = 0;

for (let i = 0; i < wordsArr.length; i++) {
  if (wordsArr[i] !== '') {
    count++;
  }
}
console.log(count);
