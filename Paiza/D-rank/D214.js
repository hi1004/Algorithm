const Main = input => {
  [a, b] = Number(input);
  console.log(a - b);
};

Main(require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n'));
