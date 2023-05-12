const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[s]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r => r.trim().split(/\s+/));
let b = Number(s[0] + s[1]),
  a = Number(s[2] + s[3]);
if (0 < b && b < 13) {
  if (0 < a && a < 13) {
    console.log('AMBIGUOUS');
  } else {
    console.log('MMYY');
  }
} else {
  if (0 < a && a < 13) {
    console.log('YYMM');
  } else {
    console.log('NA');
  }
}
