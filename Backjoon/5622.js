const [s] = require('fs')
  .readFileSync('./input.txt', 'utf-8')
  .trim()
  .split(' ');
const dial = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};

let result = 0;
for (let i = 0; i < s.length; i++) {
  for (let j in dial) {
    if (j.includes(s[i])) {
      result += dial[j];
    }
  }
}
console.log(result);
