const Main = input => {
  const str = input;
  console.log(str === 'saru' ? 'No' : 'Yes');
};

Main(require('fs').readFileSync('/dev/stdin', 'utf-8').trim());
