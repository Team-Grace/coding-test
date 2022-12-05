function solution(s) {
  const lowerString = s.toLowerCase();
  let pCount = 0;
  let yCount = 0;

  for (let el of lowerString) {
    if (el === "p") pCount++;
    else if (el === "y") yCount++;
  }
  return pCount === yCount;
}

/*
  첫 번째로 대문자, 소문자 섞여있기때문에 이를 소문자로 통일시킴(toLowerCase)
  그리고 for 반복문을 통해서 각 알파벳 숫자를 카운팅하고
  마지막으로 카운팅한 숫자를 비교 값을 리턴
*/
