function solution(numbers) {
    var answer = [];
    numbers.sort((a,b)=>a-b);
    console.log(numbers)
    for(let i = 0; i<numbers.length; i++) {
        for(let j = 1; j<numbers.length; j++) {
          
            if(i!==j) answer.push(numbers[i]+numbers[j])
          
        }
   
    }
    return [...new Set(answer)].sort((a,b)=>a-b);
}