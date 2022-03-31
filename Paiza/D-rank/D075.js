const c = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

(function solution() {
  const numbers = [1, 2, 3, 4, 5];
  for (let i = 0; i < numbers.length; i++) {
    if (c.indexOf(numbers[i]) === -1) {
      console.log(i + 1);
    }
  }
  numbers.filter(n => {
    return c.indexOf(n) === -1;
  });
})();

(function solution2() {
  const numbers = [1, 2, 3, 4, 5];
  const answer = numbers.filter(n => {
    return c.indexOf(n) === -1;
  });
  console.log(Number(answer.join('')));
})();
