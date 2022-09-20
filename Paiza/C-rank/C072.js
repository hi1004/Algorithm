const Main = input => {
  const [atk, def, agi] = input[0].split(' ').map(Number);
  const n = input[1];
  const table = input.slice(2).map(data => data.trim().split(' '));

  function solution(arr) {
    const info = {};
    let isLevelUp = false;
    let userList = [];
    for (let i = 0; i < n; i++) {
      const name = arr[i][0];
      const data = arr[i].slice(1).map(Number);

      info[name] = data;

      if (
        info[name][0] <= atk &&
        atk <= info[name][1] &&
        info[name][2] <= def &&
        def <= info[name][3] &&
        info[name][4] <= agi &&
        agi <= info[name][5]
      ) {
        isLevelUp = true;
        userList.push(name);
      }
    }
    return isLevelUp ? userList.join('\n') : 'no evolution';
  }

  console.log(solution(table));
};

Main(require('fs').readFileSync('./input.txt', 'utf8').split('\n'));
