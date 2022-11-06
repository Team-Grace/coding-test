function solution(num, total) {
  let result = Array.from({ length: num }, (_, i) => i);
  let resultArraySum = result.reduce((acc, cur) => acc + cur);

  while (resultArraySum < total) {
    result = result.map((v) => v + 1);
    resultArraySum = result.reduce((acc, cur) => acc + cur);
  }

  while (resultArraySum > total) {
    result = result.map((v) => v - 1);
    resultArraySum = result.reduce((acc, cur) => acc + cur);
  }

  return result;
}

/*
while문의 조건을 첫번째 기준인 num만큼의 배열의 요소를 가진 result에 합산값보다
클 경우와 작을 경우를 나눠서 값을 1씩 늘려주거나 내려줘서 재할당 하게 되면 total과 똑같은 값을 구할 수 있다.
*/
