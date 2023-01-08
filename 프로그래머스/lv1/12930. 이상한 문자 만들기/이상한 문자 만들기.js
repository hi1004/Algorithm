function solution(s) {
    var answer =  []   

    const str = s.split(' ')
 
    str.forEach(s=> {
       const result =  [...s].map((item,i) => {
              if(i%2 === 0) {
            return item.toUpperCase()
          } else {
              return item.toLowerCase()
          }
        }).join('')
         
        answer.push(result)
    })

    return answer.join(' ');
}