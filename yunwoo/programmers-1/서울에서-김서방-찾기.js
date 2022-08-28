function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

/*
(풀이)
indexOf 명령어로 Kim 을 찾아 템플릿리터럴을 이용해 바로 리턴해줬다.

indexOf도 O(n)의 시간복잡도를 가지며 for문과 동일하고 for문에서 break을 이용해
결과를 찾으면 바로 빠져나오는 것과 동일하기에 가독성이 좋은 indexOf를 사용했다.
*/
