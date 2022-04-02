let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const line1 = input[0].split(' ');
const line2 = input[1].split(' ');

(function solution() {
  const [x1, y1, p1] = line1;
  const [x2, y2, p2] = line2;
  const result1 = p1 / (x1 * y1);
  const result2 = p2 / (x2 * y2);
  if (result1 === result2) {
    console.log('DRAW');
  } else if (result1 < result2) {
    console.log(line1.join(' '));
  } else {
    console.log(line2.join(' '));
  }
})();
