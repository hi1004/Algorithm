const [n, s] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

(function solution1() {
  let sNum = 0;
  let rNum = 0;
  s.split('').forEach(v => {
    if (v === 'S') {
      sNum++;
    } else {
      rNum++;
    }
  });
  console.log(sNum, rNum);
})();

(function solution2() {
  let sNum = 0;
  let rNum = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === 'S') {
      sNum++;
    } else {
      rNum++;
    }
  }
  console.log(sNum, rNum);
})();

(function solution3() {
  // String.match();
  const sNum = s.match(/S/g).filter(v => v !== '').length;
  const rNum = s.match(/R/g).filter(v => v !== '').length;
  console.log(sNum, rNum);
})();

(function solution4() {
  const sNum = s.split('S').length - 1;
  const rNum = s.split('R').length - 1;
  console.log(sNum, rNum);
})();
