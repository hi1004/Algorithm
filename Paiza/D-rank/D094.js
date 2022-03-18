let [...s] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

(function solution() {
  let cat = 0;
  let dog = 0;
  s.forEach(v => {
    if (v === 'cat') {
      cat++;
    } else {
      dog++;
    }
  });
  const answer = cat > dog ? 'cat' : 'dog';
  console.log(answer);
})();
