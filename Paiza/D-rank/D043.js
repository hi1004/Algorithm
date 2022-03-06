const [n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  if (n >= 0 && n <= 30) {
    console.log('sunny');
  } else if (n >= 31 && n <= 70) {
    console.log('cloudy');
  } else {
    console.log('rainy');
  }
})();
