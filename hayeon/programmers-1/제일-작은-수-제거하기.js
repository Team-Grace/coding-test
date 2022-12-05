function solution(arr) {
  const minNumber = Math.min(...arr);
  const resultArr = arr.filter((element) => element !== minNumber);

  return resultArr.length === 0 ? [-1] : resultArr;
}

/**
 * 풀이
 * arr의 가장 작은 값을 변수로 받아준 후, filter함수를 이용해 minNumber만
 * 제거한 배열을 resultArr 변수에 담아줌!
 * 만약 결과값으로 받은 resultArr변수의 길이가 0 일 때, [-1] 반환하고 아니면 resultArr반환할 것.
 * 이 때, 처음엔 단순히 arr.length의 길이가 0일 때 조건을 설정했는데 실패함
 * 이유는 제한 조건에 arr 길이는 1 이상인 배열이었고, 당연히 결과값으로 나온 배열의 길이가 0이어야 했음!
 */
