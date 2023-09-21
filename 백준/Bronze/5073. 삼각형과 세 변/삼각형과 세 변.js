const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [...input] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  )
  .flat();
const arr = [];
for (let i = 0; i < input.length; i += 3) {
  arr.push(input.slice(i, i + 3));
}
arr.pop();
const answer = arr.map(v => {
  const sortedSides = v.sort((x, y) => y - x);

  if (sortedSides[0] >= sortedSides[1] + sortedSides[2]) {
    return 'Invalid';
  } else if (
    sortedSides[0] === sortedSides[1] &&
    sortedSides[1] === sortedSides[2]
  ) {
    return 'Equilateral';
  } else if (
    sortedSides[0] === sortedSides[1] ||
    sortedSides[1] === sortedSides[2]
  ) {
    return 'Isosceles';
  } else {
    return 'Scalene';
  }
});
console.log(answer.join('\n'));
