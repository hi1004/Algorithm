const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = Number(require("fs").readFileSync(filePath).toString().trim());
let heart = ` @@@   @@@ 
@   @ @   @
@    @    @
@         @
 @       @ 
  @     @  
   @   @   
    @ @    
     @     \n`;
console.log(heart.repeat(input));