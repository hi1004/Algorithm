function solution(n) {
    var answer = 0
    
  function isPrime(num) {
  
  if(num === 2) {
    return true;
  }
  
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){

      return false; 
    }
  }

  return true; 
}
    for(let i = 2; i<=n; i++) {
       
        if(isPrime(i)) answer++
    }
   
  
    return answer;
}