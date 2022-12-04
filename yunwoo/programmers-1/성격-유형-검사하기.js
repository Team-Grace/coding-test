function solution(survey, choices) {
  const personalityTypes = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  const temp = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let result = "";

  survey.forEach((types, i) => {
    const score = Math.abs(choices[i] - 4);

    if (choices[i] >= 1 && choices[i] <= 3) {
      temp[survey[i][0]] += score;
    } else if (choices[i] >= 5 && choices[i] <= 7) {
      temp[survey[i][1]] += score;
    }
  });

  for (let i = 0; i < personalityTypes.length; i++) {
    const [notAgree, agree] = personalityTypes[i];

    if (temp[agree] > temp[notAgree]) {
      result += agree;
    } else if (temp[agree] === temp[notAgree]) {
      result += notAgree;
    } else {
      result += notAgree;
    }
  }

  return result;
}

/*
(풀이)
풀이에 사용할 2차원 성격유형 배열과 객체를 만들어 주고 
반복을 돌며 점수를 부정일경우와 긍정일 경우를 비교해서 객체에 넣어주고
또 반복을 돌며 점수를 비교해 result 문자열을 만들어 준다.
*/
