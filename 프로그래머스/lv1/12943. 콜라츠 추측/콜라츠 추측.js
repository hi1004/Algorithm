function solution(num) {
    var answer = 0;
    while(true) {
        if(num === 1) break;
        if(num%2 === 0) {
            num /= 2
        } else {
            num = num * 3 +1
        }
  
            answer++ 
        if(num === 1) {
           break;
        } 
      
        if(answer === 499) {
            answer = -1;
            break;
        } 
       
        
      
    }
    return answer;
}