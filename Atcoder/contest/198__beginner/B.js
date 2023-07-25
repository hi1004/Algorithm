const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const str = N.toString();
const regex = str.match(/(\d*[^0])/g);

if (regex) {
  const reverse = regex.join('').split('').reverse();
  console.log(regex.join() === reverse.join('') ? 'Yes' : 'No');
} else {
  console.log('Yes');
}
