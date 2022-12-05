function solution(absolutes, signs) {
  let result = 0;

  for (let i = 0; i < signs.length; i++) {
    absolutes[i] = signs[i] ? absolutes[i] : -absolutes[i];
    result += absolutes[i];
  }
  return result;
}

/**
 * 풀이
 * 처음에는 absolute[i]값을 다시 받지 않고 그냥 삼항연산자만 작성했는데
 * 계속 값이 받아지지 않았다... 당연히 받는 곳을 만들지 않았으니 못받았던 것이다.
 * 값을 받고 그 값을 result 변수에 누적해 더해주면 된다.
 * 처음엔 더한 값을 받을 변수(sum)를 설정하고 result를 배열로 받아주려고 했는데
 * 코드만 길어지고 어처피 같은 결과를 도출하니 sum 변수를 삭제하고 바로 result에 누적한 후
 * 결과를 리턴했다.
 *
 * 아 그리고 i 의 범위는 signs 가 아니라 signs 배열의 길이!! << 계속 바로 생각 못한다.
 */
