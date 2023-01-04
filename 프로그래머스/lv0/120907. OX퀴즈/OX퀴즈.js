function solution(quiz) {
    var answer = [];
    quiz.forEach(arr => {
      
       
        if(arr.split(' ')[1] === '+') {
           const sum =  Number(arr.split(' ')[0]) + Number(arr.split(' ')[2]);
          
            if(sum === Number(arr.split(' ').at(-1))) {
                answer.push('O')
            } else {
                answer.push('X')
            }
        } else {
               const sum =  Number(arr.split(' ')[0]) - Number(arr.split(' ')[2]);

               if(sum === Number(arr.split(' ').at(-1))) {
                answer.push('O')
            } else {
                answer.push('X')
            }
        }
        
    })
    return answer;
}