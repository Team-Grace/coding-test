function solution(N, stages) {
  const result = [];
  let totalNum = stages.length;

  for (let i = 1; i <= N; i++) {
    let failureRate = 0;
    let stageNum = stages.filter((el) => el === i).length;

    if (stageNum === 0) {
      failureRate = 0;
    } else {
      failureRate = stageNum / totalNum;
    }

    totalNum -= stageNum;
    result.push({ idx: i, rate: failureRate });
  }

  result.sort((a, b) => {
    if (a.rate === b.rate) {
      return a.idx - b.idx;
    } else {
      return b.rate - a.rate;
    }
  });
  return result.map((el) => el.idx);
}

/**
 * 풀이
 * 혼자 풀기엔 좀 어려웠던 문제... 여러 방법으로 시도해봤지만 계속 실패해서 다른분의 아이디어를 더해서 풀었다.
 * 현재 스테이지에 도달한 인원을 찾고 실패율을 계산해준다.
 * 인원수에서 현재 스테이지에 있는 인원을 빼주고 정렬해주면 된다.
 * 실패율이 같으면 오름차순 정렬을 했고 다르면 내림차순으로 정렬했다..
 * 코드를 실행하는데 테스트 케이스 시간이 오래걸리는게 있어서 다시 다른방법으로도 풀어야 할 것 같다.
 */
