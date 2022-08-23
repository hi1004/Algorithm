const Main = input => {
  const x = input;
  console.log(x.charCodeAt(0) - 64);
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim());
