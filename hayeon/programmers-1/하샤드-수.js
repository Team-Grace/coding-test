function solution(x) {
  const newArr = x
    .toString()
    .split("")
    .map((arg) => Number(arg));
  let sum = 0;

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  return x % sum === 0 ? true : false;
}

/**
 * 풀이
 * 자릿수를 합하기 위해서 먼저 문자열로 만들어 줄 필요가 있었다.
 * 처음엔 for문을 돌려서 각각의 자릿수를 합하려고 했지만 복잡한 것 같아서..
 * 앞서 사용했던 map함수를 사용해 풀어봤다!
 * 먼저 새로운 배열을 정수가 들어간 배열로 만들어 준 후,
 * for문을 이용해 각 배열의 자릿수를 더해준다.
 * 그리고 x를 합한 수로 나눴을때 나누어 떨어지면 true, 아니면 false 반환할 것
 */
