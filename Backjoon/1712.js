const Main = input => {
  let [a, b, c] = input;

  const margin = c - b;

  const count = Math.floor(a / margin) + 1;
  console.log(margin <= 0 ? -1 : count);
};

const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
Main(require('fs').readFileSync(file, 'utf8').split(' ').map(Number));
