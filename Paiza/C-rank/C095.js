const Main = line => {
  const words = line.map(word => word.trim());

  function isApproval(arr) {
    if (arr[0] === arr[1] || !arr[0].length) return 'NO';
    const [words1, words2] = arr.map(word => word.split(''));
    const collection = {};

    for (let val of words1) collection[val] = (collection[val] || 0) + 1;

    for (let val of words2) {
      if (!collection[val]) return 'NO';
      else collection[val]--;
    }

    return 'YES';
  }
  console.log(isApproval(words));
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').split('\n'));
