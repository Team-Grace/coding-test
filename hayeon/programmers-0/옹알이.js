function solution(babbling) {
  let answer = 0;
  for (let i = 0; i < babbling.length; i++) {
    const target = babbling[i];
    if (!target.match(/(ayaaya|yeye|woowoo|mama)/g)) {
      if (target.replace(/(aya|ye|woo|ma)/g, "").length === 0) {
        answer++;
      }
    }
  }
  return answer;
}

/**
 * 풀이
 * 단어를 처음엔 배열안에 담아줬는데 윤우님 코드를 참고하고 정규표현식으로 쓰는 것도
 * 깔끔하다고 생각해서 한번 적용해봤다. 혼자 풀다가 어려워서 다른 분 코드를 참고했는데,
 * 단어를 배열에 담아서 푸는 방법을 생각해서 다시 한 번 풀어봐야 할 것 같다.
 */
