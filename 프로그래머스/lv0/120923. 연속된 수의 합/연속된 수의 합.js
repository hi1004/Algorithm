function solution(num, total) {
    var answer = [];
   
     //total = sum + num*offset
    let sum = num * (num+1) / 2;
    let offset = (total - sum)/num; 
      for(let i=1; i<=num; ++i) answer.push(i+offset)
    
    return answer.sort((a,b)=>a-b);
}