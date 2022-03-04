const [S] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

function solution() {
  for (let i = 0; i < S.length; i++) {
    console.log(S[i]);
  }
}
solution();
