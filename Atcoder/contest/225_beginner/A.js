const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[str]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

const solution = num => {
  if (num <= 1) return 1;
  return num + solution(num - 1);
};
console.log(solution(new Set(str).size));
