const Main = input => {
  input = Number(input);
  console.log(input * 10);
};

Main(require('fs').readFileSync('/dev/stdin', 'utf-8').trim());
