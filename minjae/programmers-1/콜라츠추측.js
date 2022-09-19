function solution(num) {
  let result = 0;

  while (num > 1) {
    if (result > 500) return -1;

    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    result++;
  }
  return result;
}

/**
 * (풀이)
 * while문을 통해서 조건식에 해당하면 그에 맞게 num에 재할당하고
 * 이런 연산을 반복할 때마다 result의 값을 올려서 최종적으로 이를 리턴한다.
 */
