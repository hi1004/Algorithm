function solution(s){
    var answer = 0;

    for(const braket of s) {
        if(braket === "(") answer++;
        if(braket === ")") answer--;
        if(answer < 0) return false;
    }

    return answer === 0;
}