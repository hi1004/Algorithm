const [s] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution1() {
  // String.indexOf();
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const answer = str.indexOf(s);
  console.log(answer + 1);
})();

(function solution2() {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  str.split('').forEach((v, i) => {
    if (v === s) {
      return console.log(i + 1);
    }
  });
})();
