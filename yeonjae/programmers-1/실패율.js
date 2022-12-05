function solution(N, stages) {
  const result = [];
  let totalStagesLen = stages.length;

  for (let i = 1; i <= N; i++) {
    const unclearStageCounts = stages.filter((stage) => stage === i).length;
    const rate = unclearStageCounts / totalStagesLen;

    result.push([i, rate]);
    totalStagesLen -= unclearStageCounts;
  }

  return result.sort((a, b) => b[1] - a[1]).map((rate) => rate[0]);
}

//N개의 스테이지 실패율을 구해야하기때문에, N만큼 for문을 돌면서 스테이지별로 실패율을 구해줘야한다.
//문제에서 말한대로 실패율은 도달했지만 클리어하지 못한 플레이어 수 /스테이지에 도전한 플레이어 수이다. 분모는 stages.length를 넣어주면되고, 분자는 현재 배열의 요소가 i인경우 i스테이지에 머물러있기때문에(클리어하지못함) stage === i.length이다. 실패율을 이렇게 구해준 후 정렬해줘야하기때문에 i, rate를 배열에 담아주었다.

//return할때는 인덱스1에 있는 숫자를 정렬해 준 후, 스테이지 번호만 리턴하기때문에 rate[0]을 return 해주었다.
