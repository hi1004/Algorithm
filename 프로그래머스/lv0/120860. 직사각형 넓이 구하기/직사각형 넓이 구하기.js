function solution(dots) {
  
    let maxX = dots[0][0];
    let minX = dots[0][0];
    let maxY = dots[0][1];
    let minY = dots[0][1];
    for(let i = 1; i<dots.length; i++) {
        const [x,y] = dots[i];
        maxX = Math.max(maxX, x)
        minX = Math.min(minX, x)
        maxY = Math.max(maxY, y)
        minY = Math.min(minY, y)
    }
  
    return Math.abs(maxX-minX) * Math.abs(maxY- minY);
}