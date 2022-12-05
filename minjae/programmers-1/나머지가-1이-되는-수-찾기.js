function solution(n) {
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 2; i <= n; i++) {
    if (n % i === 1) {
      result = Math.min(result, i);
    }
  }

  return result;
}

/*
  (풀이)
  Number.MAX_SAFE_INTEGER JavaScript에서 안전한 최대 정수값을 나타낸다. (2^53 - 1) -> 9007199254740991
  해당 상수를 이용해서 나머지가 1인 i와 현재 result의 값을 비교해서 더 작은 값을 result에 갱신했다.
  
  (아래 풀이는 배열을 통한 풀이)
  function solution(n) {
    const result = [];
    
    for(let i = 2; i <= n; i++) {
      if(n % i === 1) result.push(i);
    }
    
    return Math.min(...result);
  }
*/
