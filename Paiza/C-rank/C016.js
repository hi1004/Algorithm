const [s] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

(function solution() {
  const obj = {
    A: 4,
    E: 3,
    G: 6,
    I: 1,
    O: 0,
    S: 5,
    Z: 2,
  };
  const objKey = Object.keys(obj);
  let str = '';
  s.split('').forEach(item => {
    if (objKey.includes(item)) {
      str += obj[item];
    } else {
      str += item;
    }
  });
  console.log(str);
})();
