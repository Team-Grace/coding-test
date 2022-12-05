function solution(seoul) {
  for (const el of seoul) {
    const idx = seoul.indexOf(el);

    if (el === "Kim") {
      return `김서방은 ${idx}에 있다`;
    }
  }
}

/*
(풀이)
배열을 돌면서 "Kim"이라는 문자열을 찾고,
그 문자열을 가진 요소의 인덱스번호를 출력하기위해 indexOf를 사용했다. 

if문을 통해 `` 백틱을 이용하여 문자열과 내가찾은 인덱스번호를 출력! 
*/