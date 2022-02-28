const [n, ...args] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

function solution1(n, ...args) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer += args[i];
  }
}
console.log(solution1(n, ...args));

function solution2(...args) {
  // Array.reduce()
  const answer = args.reduce((acc, cur) => acc + cur);
  return answer;
}
console.log(solution2(...args));
