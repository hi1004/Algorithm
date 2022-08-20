const Main = input => {
  const n = Number(input[0]);
  const p = input[1].split(' ').map(n => Number(n));
  const q = new Array(n);

  for (let i = 1; i <= n; i++) {
    q[p[i - 1]] = i;
  }
  console.log(q);
  console.log(q.slice(1).join(' '));
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
