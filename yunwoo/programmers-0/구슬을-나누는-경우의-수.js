function solution(n, m) {
  const combinationArray = [BigInt(1), BigInt(1), BigInt(1)];

  for (let i = BigInt(2); i <= n; i++) {
    combinationArray[0] = combinationArray[0] * i;
  }

  for (let j = BigInt(2); j <= n - m; j++) {
    combinationArray[1] = combinationArray[1] * j;
  }

  for (let k = BigInt(2); k <= m; k++) {
    combinationArray[2] = combinationArray[2] * k;
  }

  return combinationArray[0] / (combinationArray[1] * combinationArray[2]);
}

/*
(풀이)
n! / (n-m)! * x m! 의 식을 위해
n!, n-m!, m! 각각의 값을 3개의 for문으로 구해준 후
공식대로 계산하여 반환.
*/
