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

  const max = data.reduce((prev, current) =>
    prev[1] > current[1] ? prev : current
  );
  console.log(max[0]);

  // let ans = 0;
  // let max = 0;
  // console.log(collection);
  // for (let key in collection) {
  //   if (max < collection[key]) {
  //     max = collection[key];
  //     ans = key;
  //   }
  // }
  // console.log(ans);
}

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim());
