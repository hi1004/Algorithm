const Main = input => {
  const [n, m] = Number(input).map(Number);
  console.log(Math.max(n, m));
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').split('\n'));
