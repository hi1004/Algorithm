const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...arrs] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const copyedArrys = [...arrs];

arrs.sort((a, b) => {
  if (a[0] === b[0]) {
    return b[1] - a[1];
  } else {
    return a[0].localeCompare(b[0]);
  }
});
arrs.forEach(arr => {
  console.log(copyedArrys.indexOf(arr) + 1);
});
