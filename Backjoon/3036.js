const Main = line => {
  const n = Number(line[0]);
  const numbers = line[1].split(' ').map(Number);

  function euclidean(a, b) {
    return b === 0 ? a : euclidean(b, a % b);
  }

  for (let i = 1; i < numbers.length; i++) {
    const gcd = euclidean(numbers[0], numbers[i]);
    console.log(`${numbers[0] / gcd}/${numbers[i] / gcd}`);
  }
};
Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
