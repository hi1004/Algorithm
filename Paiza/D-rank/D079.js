const [s] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

(function solution() {
  const answer = s.split('').filter((item, index) => {
    return s.split('').indexOf(item) === index;
  });
  console.log(answer.length === 1 ? 'NG' : 'OK');
})();
