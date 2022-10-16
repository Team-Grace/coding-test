function solution(common) {
  const intervalOne = common[1] - common[0];
  const intervalTwo = common[2] - common[1];

  return intervalOne === intervalTwo
    ? common[common.length - 1] + intervalOne
    : common[common.length - 1] * (common[1] / common[0]);
}

/**
 * 풀이
 *
 * 처음엔 너무 어렵게 생각했다..
 *
 * function solution(common) {
    const result = [];

    for(let i = 0; i < common.length; i++){
        //const next = common[i];

        if(common[i+1] === common[i] + i){
            result.push(common[i]);
        }
    }
    return result;
}

이런식으로 else if에 조건을 넣어서 여러 케이스를 대비해 등비수열도 찾아주려 했지만 대차게 실패함.
윤우님 코드를 참고해서 풀었는데 등비수열 조건에서 곱하기 2를 하는 것보다
다른 여러가지 케이스..? 를 대비해서 (common[1] / common[0])로 나누는 것이 나을까..?싶다!
 */
