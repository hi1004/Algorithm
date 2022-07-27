function Main(input) {
  input = input.split('\n');
  const n = input[0];
  const args = [];
  let collection = {};
  for (let i = 1; i <= n; i++) {
    args.push(input[i].trim());
  }

  for (let i of args) {
    collection[i] = (collection[i] || 0) + 1;
  }

  const data = Object.entries(collection);

  const max = data.reduce(function (prev, current) {
    return prev[1] > current[1] ? prev : current;
  });
  console.log(max[0]);
}

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim());
