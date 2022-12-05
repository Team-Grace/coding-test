function solution(s) {
  const result = s
    .split("")
    .sort((a, b) => {
      if (a > b) return -1;
    })
    .join("");

  return result;
}

/* 
(풀이)
문자열 s 를 split으로 각각의 요소로 나눈 후 a > b 일 경우에만 자리를 바꿔 내림차순으로 정렬한뒤 합쳐줬다.
대문자는 자동으로 뒤로 가길래 궁금해 찾아봤는데 유니코드 자체가 영문 소문자가 영문 대문자 보다 높았다!
*/
