function solution(answers) {
  const result = [];

  const firstPerson = [1, 2, 3, 4, 5];
  const secondPerson = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdPerson = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === firstPerson[i % firstPerson.length]) score[0]++;
    if (answers[i] === secondPerson[i % secondPerson.length]) score[1]++;
    if (answers[i] === thirdPerson[i % thirdPerson.length]) score[2]++;
  }

  const maxScore = Math.max(...score);

  for (let i = 0; i < score.length; i++) {
    if (maxScore === score[i]) result.push(i + 1);
  }
  return result;
}

/**
 * 풀이
 * 이번 문제는 나에게 너무나도 헷갈렸다...
 * 처음엔 패턴이 반복되니까 repeat()을 이용해야 하나? 생각했는데 얼마나 반복해야 하는지 모르니까
 * 아니라는 것을 깨달았다.
 * 계속 이상하게 푸는거 같아서 구글링을 했는데.. 처음에 for문에서 i를 도대체 왜 배열의 길이만큼
 * 나누는지 몰랐는데.. 윤우님의 코드를 참고했을때 알 수 있었다!
 * i % 5 해서 5번 돌렸을 때, 0~4 까지는 i가 값이 되고.. 5일때는 다시 0으로 돌아가기 때문에
 * 안에 있는 배열이 계속 반복 될 수 있는것이었다!!
 * 그리고 answers의 인덱스값고 비교했을 때 같으면 스코어 점수를 1 씩 올려주고 풀어주면 된다.
 * 어려웠던 문제지만 이해하고 넘어가서 다행이다.. 무조건 다시풀기!
 */
