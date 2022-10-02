function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    let divisor = [];
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) divisor.push(j);
    }
    result += divisor.length % 2 === 0 ? i : -i;
  }
  return result;
}

/**
 * 풀이
 * 이번 문제는 생각하는데 좀 오래 걸렸다. 이것저것 해보다가 안되서
 * 이중 for문을 사용해서 풀면 좀 더 간단하게 풀 수 있었던 것 같다..
 * 간단하게 다르게 푸는 방법도 있던데 그것도 공부해봐야할 것 같다.
 */
