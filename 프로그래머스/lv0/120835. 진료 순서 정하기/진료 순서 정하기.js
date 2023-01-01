function solution(emergency) {
    var answer = [];
    const nums = [...emergency]
    nums.sort((a,b)=>b-a);

    const collection = {}
    let count = 1;
    for(let val of nums) {
        collection[val] = count++
    }
 
  emergency.forEach(n=> {
      answer.push(collection[n])
  })
    return answer;
}