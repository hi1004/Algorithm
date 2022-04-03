const [input] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ');

(function solution1() {
  let result = 0;
  input.split('').forEach(item => {
    if (item === '/') {
      result += 1;
    } else if (item === '+') {
      result += 0;
    } else if (item === '<') {
      result += 10;
    }
  });
})();

(function solution2() {
  let result = 0;
  input.split('').forEach(item => {
    switch (item) {
      case '/':
        result++;
        break;
      case '<':
        result += 10;
        break;
    }
  });
  console.log(result);
})();
