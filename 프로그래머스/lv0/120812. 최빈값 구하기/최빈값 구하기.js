function solution(array) {
 
    const collection = {};
 
    for(let val of array) {
        collection[val] = (collection[val]|| 0) +1;
    }
   
    const answer = Object.entries(collection);


    answer.sort((a, b) => b[1] - a[1]);
    if(answer.length >1 && answer[0][1] === answer[1][1]) {
         return -1
    }
       

  
    return  Number(answer[0][0]);
}