const Main = input => {
  let n = Number(input[0]);
  const p = input[1].split(' ').map(Number);
  let ans = 0;
  while (n !== 1) {
    n = p[n - 2];
    ans++;
  }
  console.log(ans);
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
