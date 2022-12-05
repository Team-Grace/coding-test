function solution(arr) {
  const result = [];

  for (const el of arr) {
    const lastElement = result[result.length - 1];
    // const lastElement = result.at(-1);

    if (lastElement === el) continue;
    result.push(el);
  }

  return result;
}

/* 
  (풀이)
  result의 마지막 요소와 같다면 연속하는 중복 요소이기 때문에 continue로 건너뛴다. 
  그렇지않으면 연속하는 중복 요소가 아니기때문에 result에 push한다.

  마지막 요소를 계산할 때 result.length를 이용해도되지만 최신 자바스크립트 문법 중에 at이라는
  문법을 이용해서도 마지막 요소를 가져올 수 있다.
*/
