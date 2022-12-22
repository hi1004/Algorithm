const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n] = input.shift().split(' ').map(Number);
const S = input.slice().map(s => s.trim());

const regexp =
  /^[H,D,C,S]{1}[A , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , T , J , Q , K]{1}$/g;

const answer = [];
S.forEach(n => {
  if (regexp.test(n)) {
    answer.push(n.match(regexp).join(''));
  }
});

console.log(new Set(answer).size === n ? 'Yes' : 'No');
