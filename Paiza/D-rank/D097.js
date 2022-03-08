const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution1() {
  let count = 0;
  arr.forEach(el => {
    if (el === 1) {
      count++;
    }
  });
  count >= 5 ? console.log('yes') : console.log('no');
})();

(function solution2() {
  // Array.filter();
  const answer = arr.filter(el => el > 0);
  answer.length >= 5 ? console.log('yes') : console.log('no');
})();
