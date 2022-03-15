const [n, s] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  const km = 1000000;
  const m = 1000;
  const cm = 10;
  if (s === 'km') {
    console.log(n * km);
  } else if (s === 'm') {
    console.log(n * m);
  } else {
    console.log(n * cm);
  }
})();
