const [n] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution1() {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}

function solution2() {
  while (n > 0) {
    console.log(n);
    n--;
  }
}

solution1();
solution2();
