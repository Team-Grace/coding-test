function solution(num) {
  let answer = "";

  num % 2 ? (answer = "Odd") : (answer = "Even");
  return answer;
}

/*
(풀이)
빈 문자열에 짝수면 "Even"을, 홀수면 "Odd"를 추가해줘서 리턴! 
*/
