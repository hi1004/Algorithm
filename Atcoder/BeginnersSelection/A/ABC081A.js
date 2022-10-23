const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
let result = 0;
input.forEach(s => {
  if (s === '1') {
    result++;
  }
});
console.log(result);
