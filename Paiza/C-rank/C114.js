const [n, ...args] = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .trim()
  .split('\n');

const s = args.map(e => {
  return e.trim();
});

const first = s.map(el => {
  return el[0];
});
const last = s.map(el => {
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
