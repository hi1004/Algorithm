const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

const nums = Array.from({ length: b - a + 1 }, (_, i) => a + i).map(n =>
  n.toString()
);

const countValidNumbers = num => {
  const validDigits = { 0: '0', 1: '1', 6: '9', 8: '8', 9: '6' };
  const numStr = num.toString();
  let rotatedNum = '';
  for (let i = 0; i < numStr.length; i++) {
    const digit = numStr.charAt(i);

    if (!(digit in validDigits)) {
      return 0;
    }
    rotatedNum = validDigits[digit] + rotatedNum;
  }

  if (parseInt(rotatedNum, 10) === num) {
    return 1;
  } else {
    return 0;
  }
};

let count = 0;
for (let i = a; i <= b; i++) {
  count += countValidNumbers(i);
}

console.log(count);
