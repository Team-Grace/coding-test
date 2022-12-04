function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}

/**
 * 풀이
 * 진짜 내가 혼자 풀기 힘들었던 문제.. 이해하는것도 오래걸렸는데 아예 풀이를 제대로
 * 생각할 수 없어서 구글링했다. 이때 choices값이 3보다 크면 동의, 작으면 비동의라고 생각 후 풀면 된다.
 * 각 성격 유형 케이스를 만들고 점수가 3보다 크면 비동의 캐릭터, 작으면 동의 캐릭터에 점수를 준다.
 * 모든 선택지에 점수를 주고 부여된 점수가 큰 캐릭터를 반환한다.
 */
