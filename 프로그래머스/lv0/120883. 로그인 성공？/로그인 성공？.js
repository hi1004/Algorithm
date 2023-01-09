function solution(id_pw, db) {
    var answer = '';
    const database = {}
    for(let val of db) {
        database[val[0]] = val[1]
    }
  
    if(database[id_pw[0]] === id_pw[1]) {
        answer = 'login';
    } else if (Object.keys(database).includes(id_pw[0]) && database[id_pw[0]] !== id_pw[1]) {
        answer = 'wrong pw';
    } else {
        answer = 'fail'
    }
    
    return answer;
}