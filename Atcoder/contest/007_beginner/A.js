const Main = input => {
  input = Number(input);
  console.log(input - 1);
};

Main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
