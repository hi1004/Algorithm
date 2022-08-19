const Main = input => {
  input = input.map(list => list.trim());
  const lists = ['ARC', 'AGC', 'AHC', 'ABC'];

  const result = lists.filter(list => {
    if (!input.includes(list)) {
      return list;
    }
  });
  console.log(result.join(''));
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
