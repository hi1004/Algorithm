function solution(s){
    var answer = true;


    const p =  s.match(/p/gi) 
    const y = s.match(/y/gi) 
    console.log(p,y)
    if(p===null && y=== null) {
        answer = true;
    } else if(p === null || y===null) {
        answer = false
    } else if(p.length === y.length){
        answer = true
    } else {
        answer = false
    }
   

    return answer;
}