const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [i] = fs
    .readFileSync(file)
    .toString()
    .trim()
    .split(/\s+/)
    .map(v => (isNaN(v) ? v : +v)),
  r = [],
  b = [];

i = i.split('');
for (c = 0; c < i.length; c++) {
  if (i[c] == 'R') r.push(c);
  else if (i[c] == 'B') b.push(c);
}
k = i.indexOf('K');
console.log(!(b[0] % 2 == b[1] % 2) && r[0] < k && r[1] > k ? 'Yes' : 'No');
