const Main = input => {
  const [N, M] = input[0].split(' ').map(Number);

  const cars = [];
  for (let i = 1; i < N; i++) {
    cars.push(Number(input[i]));
  }
  const result = cars.filter(car => car <= M).reduce((acc, cur) => acc + cur);
  console.log(result);
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
