function solution(s){
  const sameLevelStr = s.toLowerCase();
  
  let lengthP = 0;
  let lengthY = 0;
      
  for(let i=0; i<sameLevelStr.length; i++) {
    if(sameLevelStr[i] === "p") lengthP++
    else if(sameLevelStr[i] === "y") lengthY++
    else true;
  }

  if(lengthP === lengthY) return true;
  else return false;
}

/*
(풀이)
먼저 대문자와 소문자가 섞여있게되면, 
카운트세기 힘들겠다고 생각이 들어 소문자로 통일을 먼저 시켜주었다.

그다음으로 for문으로 돌면서 "p"와 "y"의 개수를 카운트세어줌 
"p", "y"가 없는경우는 항살 true를 리턴. 

for문이 끝나면 전역에서 선언해준변수 lengthP와 lengthY에는 개수가 담겨있을것이고
그 둘을 비교해서 값이같으면 true,
다르면 false를 리턴! 
*/
      
