let [s] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  const result = s.split('').filter((item, index) => {
    return s.split('').indexOf(item) === index;
  });
  console.log(result.length < s.length ? 'NG' : 'OK');
})();
