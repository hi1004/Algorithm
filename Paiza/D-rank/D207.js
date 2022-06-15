const [s] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

let str = [];
for (let i = 0; i < 3; i++) {
  str.push(s[i]);
}

console.log(str.join(''));
