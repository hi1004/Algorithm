const Main = line => {
  const n = Number(line[0]);
  const regexp = /[0-9]/g;
  const ids = line.slice(1).map(id => id.trim());
  const numbers = ids.map(id => id.match(regexp).join(''));

  let collection = {};

  for (let i = 0; i < n; i++) {
    collection[numbers[i]] = ids[i];
  }

  Object.keys(collection).sort();
  for (let key in collection) {
    console.log(collection[key]);
  }
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
