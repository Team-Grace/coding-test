function solution(s) {

  return s.split("").sort().reverse().join("");
}

/*
(풀이)
문자열을 재배치하기위해서, 
배열로 바꾼 후, 내림차순을 해주고 마지막에 문자열로 다시 리턴! 
메서드만 알면 쉽게 풀 수 있었다 :)
*/