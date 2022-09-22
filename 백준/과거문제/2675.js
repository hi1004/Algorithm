const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  const R = Number(input[i].split(' ')[0]);
  const P = input[i].split(' ')[1];
  const arr = P.split('');

  const result = arr.map(item => {
    return item.repeat(R);
  });
  console.log(result.join(''));
}
