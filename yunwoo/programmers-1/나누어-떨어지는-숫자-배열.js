function solution(arr, divisor) {
  const result = arr
    .filter((value) => value % divisor === 0)
    .sort((a, b) => a - b);

  return result.length === 0 ? [-1] : result;
}
/*
(풀이)
arr 을 filter 로 나머지가 0 이 되는 배열을 오름차순으로 result에 할당.
삼항연산자로 배열이 비어있으면 -1을 리턴해줬다.
값이 정수인지 불리언 값으로 반환해주는Number.isInteger()를 이용한 방법도 생각해봤는데
결국 for문을 사용해야해서 가독성이 더 좋은 fliter 사용.
*/