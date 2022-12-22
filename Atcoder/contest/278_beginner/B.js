const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [h, m] = fs.readFileSync(file).toString().trim().split(' ');

if (h < 10) {
  h = `0${h}`;
}
if (m < 10) {
  m = `0${m}`;
}

while (true) {
  if (m === 60) {
    m = '00';
    h++;
  }
  if (h === 24) {
    h = '00';
  }

  const H = h.toString()[0] + m.toString()[0];
  const M = h.toString()[1] + m.toString()[1];
  if (H < 24 && M < 60) {
    console.log(h, m);
    break;
  }

  m++;
}
