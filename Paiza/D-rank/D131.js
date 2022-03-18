const [S] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution1() {
  let answer = '';
  S.split('').filter(v => {
    if (v === '0') {
      answer += 'C';
    } else if (v === '1') {
      answer += 'A';
    } else {
      answer += 'B';
    }
    return answer;
  });
  console.log(answer);
})();

(function solution2() {
  let answer = '';
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '0') {
      answer += 'C';
    } else if (S[i] === '1') {
      answer += 'A';
    } else {
      answer += 'B';
    }
  }
  console.log(answer);
})();
