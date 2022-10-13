function solution(emergency) {
  const result = [];

  for (let i = 1; i <= emergency.length; i++) {
    const highNum = emergency.indexOf(Math.max(...emergency));

    result[highNum] = i;
    emergency[highNum] = 0;
  }

  return result;
}
/*
(풀이)
빈 배열을 하나 만들고 for문을 1부터 돌려준다.
주어진 배열의 가장 큰값의 index를 구해주고 빈배열에 해당 index에 1 부터 순차적으로 넣어준다.
이 때 큰값을 구한 원본배열의 값은 0으로 만들어준다.
 */
