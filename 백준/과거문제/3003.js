const Main = input => {
  const piece = [1, 1, 2, 2, 2, 8];
  const result = [];
  piece.forEach((p, i) => {
    result.push(p - input[i]);
  });
  console.log(result.join(' '));
};

Main(require('fs').readFileSync('./input.txt', 'utf8').split(' ').map(Number));
