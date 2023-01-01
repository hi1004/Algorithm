function solution(array, n) {
    const answer = [];
    array.sort((a,b)=>a-b)
    array = [...new Set(array)]

    array.forEach(num => {
          const temp = Math.abs(n - num)
        if(num !== n) {
      
        answer.push(temp)
        }
  
    })

    const minIndex = answer.indexOf(Math.min(...answer))
    console.log(minIndex)
    return array.includes(n) ? n : array[minIndex];
}