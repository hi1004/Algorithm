const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ');

(function solution() {
  const [N, X, Y] = input;
  let array = [];
  for (let i = 1; i <= N; i++) {
    if (i % X === 0 && i % Y === 0) {
      array.push('AB');
    } else if (i % X === 0) {
      array.push('A');
    } else if (i % Y === 0) {
      array.push('B');
    } else {
      array.push('N');
    }
  }
  console.log(array.join('\n'));
})();
