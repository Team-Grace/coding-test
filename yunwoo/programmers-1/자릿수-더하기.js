function solution(n) {
  let convertedNumber = n
    .toString()
    .split("")
    .map((v) => Number(v));

  return convertedString.reduce((acc, cur) => acc + cur);
}
/* 
(풀이)
숫자를 문자열로 변경 후 split으로 쪼개고 map으로 다시 숫자 배열로 저장
reduce로 각 요소를 더해줘서 리턴.
*/
