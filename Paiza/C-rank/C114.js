const input = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .trim()
  .split('\n');

const n = input[0];
const words = [];
for (let i = 1; i <= n; i++) {
  words.push(input[i].trim());
}

for (let i = 0; i < words.length; i++) {
  words[i];
}

const first = words.map(el => {
  return el[0];
});
const last = words.map(el => {
  return el[el.length - 1];
});

first.shift();
last.pop();
const sumArr = first.concat(last);

let flg = false;
for (let i = 0; i < sumArr.length; i++) {
  if (last[i] === first[i]) {
    flg = true;
  } else if (last[i] !== first[i]) {
    flg = false;
    console.log(last[i], first[i]);
    break;
  }
}
if (flg) {
  console.log('Yes');
}
