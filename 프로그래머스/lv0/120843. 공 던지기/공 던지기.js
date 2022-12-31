function solution(numbers, k) {
    var answer = 0;
    let count = 0;
    if(numbers.length%2 === 0) {
        while(count<k) {
            const arr = numbers.filter(n=>n%2 !== 0);
            if(arr.length < k) {
                k=k%arr.length
            }
            answer = arr[count]
            count++;
        }
    } else {
        while(count <k) {
           
         answer =  numbers.shift()
              numbers.push( answer);
              numbers.push( numbers.shift());
        
 
            count++;
        }
    }
    
    return answer;
}