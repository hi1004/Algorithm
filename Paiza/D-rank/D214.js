const Main = input => {
  const [a, b] = input;
  console.log(a - b);
};

Main(require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n'));
