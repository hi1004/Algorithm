const [n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function soltuion() {
  const number = Math.floor(n / 100);
  if (number === 4) {
    console.log('error');
  } else if (number === 2) {
    console.log('ok');
  } else {
    console.log('unknown');
  }
})();
