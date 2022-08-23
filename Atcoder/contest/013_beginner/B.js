const Main = input => {
  let [a, b] = input.map(v => Number(v));

  console.log(Math.min(Math.abs(a - b), 10 - Math.abs(a - b)));
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
