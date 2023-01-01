function solution(hp) {
    var answer = 0;
    const ant = [5,3,1];
    
    while(hp !== 0) {
        
        if(hp >=5) {
            answer = Math.floor(hp / 5);
            hp = hp%5;      
        }  else {
            if(hp>= 3) {
                answer += Math.floor(hp/3)
                hp = hp%3
            } else {
                answer++
                hp--
            }
        }
        
  
        
    }
    return answer;
}