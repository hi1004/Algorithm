function solution(my_string) {
    var answer = 0;
    answer = my_string.split(' ')
    const operator = answer.filter(v=>v === '+'||v ==='-')

    let sum = Number(answer[0]);
    for(let i = 0; i<answer.length; i++) {
        if(answer[i] === '+') {
            sum +=   Number(answer[i+1]) 
                console.log(sum)
        } else if(answer[i] === '-') {
          sum -=   Number(answer[i+1]) 
        }
    

    }
 
  
        
      
           
 
     
    
    return sum;
}