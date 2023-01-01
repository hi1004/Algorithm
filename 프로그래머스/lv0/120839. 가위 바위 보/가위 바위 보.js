function solution(rsp) {
    var answer = '';
    [...rsp].forEach(s=> {
      if(s ==='2') {
          answer += "0"
      } else if(s === '0') {
          answer += "5"
      } else {
          answer += "2"
      }
    })
   
    return answer;
}