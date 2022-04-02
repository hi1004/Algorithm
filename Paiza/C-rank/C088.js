const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

(function solution() {
  const n = input[0];
  const price = input[1].split(' ');
  const money = input[2].split(' ')[0];
  const request = input[2].split(' ')[1];
  let result = money;
  for (let i = 0; i < request; i++) {
    const item = input[i + 3].split(' ')[0];
    const count = input[i + 3].split(' ')[1];
    if (result - count * price[item - 1] >= 0) {
      result -= count * price[item - 1];
    }
  }
  console.log(result);
})();
