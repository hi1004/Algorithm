let [h, m] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

if (m - 45 < 0) {
  h = h - 1;
  m = 60 + (m - 45);
  if (h === -1) {
    h = 23;
  }
} else {
  m = m - 45;
}
console.log(h, m);
