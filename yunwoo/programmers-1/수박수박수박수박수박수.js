function solution(n) {
  return n % 2 === 0 ? "수박".repeat(n / 2) : "수박".repeat(n / 2) + "수";
}

/* 
  (풀이)
  1. 첫번째 풀이

  let result = "";
  for (i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      result += "수";
    } else {
      result += "박";
    }
  }
  return result;

  처음으로 한 풀이는 간단한 반복문으로 진행했다.
  i가 홀수면 "수"를 짝수면 "박" 을 result에 더하기할당을 해줘서 처리했다.

  2. 최종 풀이

  효율성에 대해 고민했을때 위 풀이는 시간복잡도 O(N)을 가진 풀이였고 O(1) 로 충분히 가능할것 같았기에 변경.
  문자열을 반복해주는 repeat 메서드를 이용. (repeat 메서드는 소수의 경우 알아서 정수로 변환)
  const watermelon = '수박';
  const firstTextOfWatermelon = '수';
  변수 waterMelon 과 firstTextOfWaterMelon 를 만들어서 할당 해줬다가 마지막 체크에 변수가 필요없음을 깨달음
  제거하고 삼항연산자를 이용해 문자 자체를 사용, 한줄로 만들어줬다.
  
*/
