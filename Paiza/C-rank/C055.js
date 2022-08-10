const Main = input => {
  const n = Number(input[0]);
  const target = input[1].toString().trim();

  const lists = input.slice(2).map(list => list.trim());

  const result = lists.filter(list => {
    if (list.includes(target)) {
      return list;
    }
  });
  if (result.length === 0) {
    console.log('None');
  }
  result.forEach(ans => {
    console.log(ans);
  });
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
