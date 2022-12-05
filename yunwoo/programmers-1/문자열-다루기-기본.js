function solution(s) {
  const convertedArr = Array.from(s);
  const result = convertedArr.map((v) => Number(v));

  if (s.length === 4 || s.length === 6) {
    return result.includes(NaN) ? false : true;
  }
  return false;
}
/* 
(풀이)
문자열 s를 배열에 넣고 map메소드로 각자 Number타입으로 변형.
문자나 -, 소수 등은 NaN 으로 나오므로 요소갯수가 4,6 인 배열에 NaN가 있다면 false 없으면 true
*/
