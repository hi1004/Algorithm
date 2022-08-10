const Main = input => {
  const n = Number(input[0]);
  const list = [];
  for (let i = 1; i <= n; i++) {
    list.push(input[i].trim());
  }
  const collection = {};

  for (let i of list) {
    collection[i] = (collection[i] || 0) + 1;
    if (collection[i] > 1) {
      console.log(`${i}(${collection[i] - 1})`);
    } else {
      console.log(`${i}`);
    }
  }
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
