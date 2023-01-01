function solution(n) {
    var answer = []
    

    
    function divisor(n) {
      let nums = []
        for(let i=1; i<=n; i++) {
         
            if(n%i === 0) {
               nums.push(i)
          }
       
        }
        if(nums.length >= 3) {
            answer.push(nums)
         }
          return answer
    }
    
    for(let i=1; i<=n; i++) {
        divisor(i)
    }
    
    return answer.length;
}