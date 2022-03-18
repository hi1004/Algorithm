let [c_1, c_2] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  if (c_1 === 'J' && c_2 === 'J') {
    c_2 = 'Q';
  }
  console.log(c_1, c_2);
})();
