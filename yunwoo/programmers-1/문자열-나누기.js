function solution(s) {
  let copyString = s;
  let result = 0;
  let matchChar = 0;
  let misMatchChar = 0;

  for (let i = 0; i <= copyString.length; i++) {
    copyString[i] === copyString[0] ? matchChar++ : misMatchChar++;

    if (matchChar === misMatchChar) {
      copyString = copyString.replace(copyString.substring(0, i + 1), "");
      i = -1;
      matchChar = 0;
      misMatchChar = 0;
      result++;
    }
  }

  return misMatchChar ? result + 1 : result;
}

/*
(풀이)
문자열의 0번째 인덱스와 for문의 i를 비교해서 같은경우 matchChar를 +1 아닐 경우 +1 을 시키는데
이때 두 변수가 동일하면 replace를 이용해 해당문자를 제거해서 재할당해주고 기존의 i 와 변수를 모두
초기화 시키며 result를 1 증가 시킨다.
마지막에 result를 리턴하고 끝내는데 여기서 misMatchChar에 값이 남아 있는 경우 result에 +1 을 시켜 반환하고
아닐 경우 result만 반환한다.
민재님 풀이를 참고하여 misMAtchChar가 남는 경우를 알아냈는데 이게 왜 남는건지 잘 모르겠습니다..
*/
