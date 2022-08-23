const Main = input => {
  let [a, b] = input.map(v => Number(v));
  const big = 10 - Math.max(a, b);

  if (Math.abs(a - b > 4)) {
    console.log(big + Math.min(a, b));
  } else {
    console.log(Math.min(Math.abs(a - b), big + Math.min(a, b)));
  }
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
