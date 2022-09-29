const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

input.pop();
const paragraph = input.map(str => str.trim());

const regexp = /['a'|'e'|'i'|'o'|'u']/gim;

for (let i = 0; i < input.length; i++) {
  const arr = paragraph[i].match(regexp);

  if (arr === null) {
    console.log(0);
  } else {
    console.log(arr.length);
  }
}
