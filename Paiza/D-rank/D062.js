const [h_1, h_2, h_3] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const numbers = [h_1, h_2, h_3];

(function solution() {
  const str = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  for (let i = 0; i < numbers.length; i++) {
    console.log(str.splice(0, numbers[i]).join(''));
  }
})();
