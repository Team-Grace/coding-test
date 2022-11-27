function solution(N, stages) {
  const result = [];

  for (let i = 1; i <= N; i++) {
    const stagesChallenger = stages.filter((el) => el >= i).length;
    const notClearPeople = stages.filter((el) => el === i).length;

    result.push([i, notClearPeople / stagesChallenger]);
  }

  return result.sort((a, b) => b[1] - a[1]).map((item) => item[0]);
}

/*
(풀이)
결국 안풀려서 구글링해서 답지 정독. 객체의 key 와 value를 이용해 해보려 했는데 잘안됐습니다..

filter로 총 도전자와 클리어하지 못한 사람의 수를 구해
현재 스테이지와 실패율을 배열형태로 배열에 넣어준다.
for문으로 낮은스테이지 순으로 push했기때문에 따로 실패율이 같을 때는 고려할 필요가 없으며
실패율 기준으로 내림차순 정렬해주고 스테이지 요소만 남겨 리턴.
*/
