const [s] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

(function solution() {
  const bottom = s.match(/_/g).filter(item => item !== '').length;
  const middle = s.match(/-/g).filter(item => item !== '').length;

  const result =
    bottom >= middle ? s.replaceAll('-', '_') : s.replaceAll('_', '-');
  console.log(result);
})();
