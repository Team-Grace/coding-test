function solution(a, b) {
  let result = [a, b];
  if (a > b) {
    for (i = 1 + b; i < a; i++) {
      result.push(i);
    }
  } else if (a < b) {
    for (i = 1 + a; i < b; i++) {
      result.push(i);
    }
  } else {
    return a;
  }
  return result.reduce((acc, cur) => acc + cur);
}

/*
(풀이)
각 조건에 따라 따라 for문을 돌려 result 배열에 값을 넣어주고
reduce 메소드를 이용해 값을 합산해서 return 해줬다.
가독성 좋은 코드는 아닌거 같은데..🤔 무언가 수학적 방법이 있을거 같은데
떠오르지 않는다..
*/