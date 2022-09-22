const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
let array = new Array(n);

for (let i = 1; i <= n; i++) {
  let result = 0;
  let array2 = [];
  array[i - 1] = input[i].split('');

  array[i - 1].forEach(item => {
    if (item === 'O') {
      array2.push(++result);
    } else if (item === 'X') {
      array2.push(0);
      result = 0;
    }
  });
  console.log(array2.reduce((acc, cur) => acc + cur));
}
