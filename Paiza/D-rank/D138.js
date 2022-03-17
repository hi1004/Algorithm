const [w, s, ...str] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);

(function solution() {
  str.forEach(s => {
    console.log(s);
  });
})();
