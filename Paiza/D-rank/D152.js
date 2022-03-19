const [s, n] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

(function solution() {
  let count = 0;
  s.split('').forEach(v => {
    if (v === 'R') {
      count++;
    }
  });
  const answer = count >= Number(n) ? 'Yes' : 'No';
  console.log(answer);
})();

(function solution2() {
  const result = s.split('').reduce((accu, curr) => {
    accu[curr] = (accu[curr] || 0) + 1;
    return accu;
  }, {});
  console.log(result['R'] >= Number(n) ? 'Yes' : 'No');
})();
