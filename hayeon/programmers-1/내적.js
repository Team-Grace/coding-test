function solution(a, b) {
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  return result;
}

/**
 * 풀이
 * 간단한 문제였다. 다른 방법으로도 풀 수 있는 방법이 있을까? 생각해봤는데
 * for..in 으로도 풀 수 있을 것 같다! (인덱스를 받아오는 것이기 때문에..?)
 *
< for...in 으로 푼 풀이 >
function solution(a, b) {
    let result = 0;

    for(const idx in a){
        result += a[idx] * b[idx];
    }
    return result;
}

 * 뭔가 reduce 로도 풀 수 있을 것 같은 .. 느낌..
 */
