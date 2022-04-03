const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ');
const [N, X, Y] = input;

(function solution() {
  for (let i = 1; i <= N; i++) {
    if (i % X === 0 && i % Y === 0) {
      console.log('AB');
    } else if (i % X === 0) {
      console.log('A');
    } else if (i % Y === 0) {
      console.log('B');
    } else {
      console.log('N');
    }
  }
})();
