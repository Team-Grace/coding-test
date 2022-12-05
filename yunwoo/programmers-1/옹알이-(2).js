function solution(babbling) {
  let result = 0;

  babbling.forEach((el) => {
    const reg = /(aya|ye|woo|ma)/g;
    const repeatReg = /(ayaaya|yeye|woowoo|mama)/g;
    const DeleteRepeatbabbling = el.replace(repeatReg, "No");
    const getbabbling = DeleteRepeatbabbling.replace(reg, "");

    if (!getbabbling) result++;
  });

  return result;
}

/*
(풀이)
같은문자가 반복되는 부분을 정규표현식으로 먼저 제거해준 후
옹알이에 해당하는 문자열을 빈문자열로 만들어 빈문자열이 존재할 경우
result++ 을 해준다.
*/
