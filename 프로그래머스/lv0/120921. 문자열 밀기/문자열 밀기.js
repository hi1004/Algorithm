function solution(A, B) {
    var answer = 0;
    let count = 0
    const str =[...A]
    while(count < A.length) {
         if(str.join('') === B){
            
            break;
        }
        const pop = str.pop()
        str.unshift(pop)
        count++;
        
       
    }
    return count === str.length ? -1 : count;
}