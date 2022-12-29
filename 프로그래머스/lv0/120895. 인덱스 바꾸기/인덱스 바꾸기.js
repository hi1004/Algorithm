function solution(my_string, num1, num2) {
    let answer = [...my_string]
   for(let i =0; i<my_string.length; i++) {
       if(i === num1) {
         answer.splice(num1, 1, answer[num2])
       } else if(i === num2) {
          answer.splice(num2, 1, my_string[num1])
       }
      
   }
       
    return answer.join('');
}