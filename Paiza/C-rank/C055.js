const Main = input => {
  const target = input[1].toString().trim();
  const lists = input.slice(2).map(list => list.trim());
  let flag = false;
  for (let ans of lists) {
    if (ans.includes(target)) {
      flag = true;
      console.log(ans);
    }
  }
  if (!flag) {
    console.log('None');
  }
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
