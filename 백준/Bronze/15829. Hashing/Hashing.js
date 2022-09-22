const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(line[0]);
const str = line[1];
const M = 1234567891;
const alpa = {};
for (let i = 0; i < 26; i++) {
  const char = String.fromCharCode(97 + i);
  alpa[char] = i + 1;
}

const strArr = str.split('').map(s => {
  return alpa[s];
});

function hash(arr) {
  let sum = 0;
  let r = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * r;
    sum %= M;
    r *= 31;
    r %= M;
  }
  return sum;
}
console.log(hash(strArr));
