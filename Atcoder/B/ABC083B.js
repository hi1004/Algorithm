function solution1() {
  const input = require('fs')
    .readFileSync('/dev/stdin', 'utf8')
    .trim()
    .split(' ');
  const N = Number(input[0]);
  const A = Number(input[1]);
  const B = Number(input[2]);

  const nums = Array.from(new Array(N), (v, i) => ++i).filter(i => {
    let n = i
      .toString()
      .split('')
      .reduce((p, c) => p + parseInt(c), 0);
    return n >= A && n <= B;
  });

  console.log(nums.reduce((p, c) => p + c, 0));
}

(function solution2() {
  const input = require('fs')
    .readFileSync('/dev/stdin', 'utf8')
    .trim()
    .split(' ');
  const N = Number(input[0]);
  const A = Number(input[1]);
  const B = Number(input[2]);
  let result = 0;
  let sum = 0;

  for (let i = 1; i <= N; i++) {
    sum = i
      .toString()
      .split('')
      .reduce((acc, cur) => acc + parseInt(cur), 0);

    if (sum >= A && sum <= B) {
      result += i;
    }
  }
  console.log(result);
})();
