function solution(n) {
  return String(n).split("").map(Number).reverse();
}

/*
(풀이)
일단 배열로 만들어야하기때문에 
숫자를 문자열로 바꾸고, split를 써서 1,2,3,4,5를 배열에 넣어주었다
요소 하나나가 문자열이기때문에 숫자로 바꾼후에
reverse를 써서 자연수배열을 뒤집어주었다!  
*/
