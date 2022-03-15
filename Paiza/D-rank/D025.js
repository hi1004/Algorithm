const [n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  if (n.length === 1) {
    console.log(`00${n}`);
  } else if (n.length === 2) {
    console.log(`0${n}`);
  } else {
    console.log(`${n}`);
  }
})();

(function solution2() {
  const answer = n.length === 1 ? `00${n}` : n.length === 2 ? `0${n}` : `${n}`;
  console.log(answer);
})();
