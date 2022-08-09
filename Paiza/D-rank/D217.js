const Main = input => {
  console.log(input.length);
};

Main(require('fs').readFileSync('/dev/stdin', 'utf-8').trim());
