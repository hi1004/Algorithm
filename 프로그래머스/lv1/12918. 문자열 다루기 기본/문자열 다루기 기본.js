function solution(s) {
    let answer = ''
    const regex = /[a-z]/gi
    console.log()
    
    for(let i = 0; i<s.length; i++) {
         if((s.length === 4 || s.length === 6) && !regex.test(s)) {
             answer = true;
          } else {
            answer = false;
             break;
      }
    }
    

   
    
    return answer;
}