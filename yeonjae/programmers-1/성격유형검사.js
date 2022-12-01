function solution(survey, choices) {
  const result = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  let answer = "";

  for (let i = 0; i < survey.length; i++) {
    const [disagree, agree] = survey[i].split("");
    if (choices[i] === 4) continue;
    if (choices[i] < 4) result[disagree] += 4 - (choices[i] % 4);
    else result[agree] += choices[i] % 4;
  }

  answer += result["R"] >= result["T"] ? "R" : "T";
  answer += result["C"] >= result["F"] ? "C" : "F";
  answer += result["J"] >= result["M"] ? "J" : "M";
  answer += result["A"] >= result["N"] ? "A" : "N";

  return answer;
}

//MBTI 검사결과를 도출하기위해 배열 result에 모두 담아준 후
//survey의 길이만큼 돌면서 모르겠음을 기준으로 무효 / 비동의 / 동의를 나눠주었다.
//검사 지표에따른 점수를 result에 담아주었고 이를 기준으로 answer에 MBTI 성격유형검사결과를 둘 중 점수가 큰지표 하나를 골라 담아주면 4가지조합의 문자열이 나온다.(MBTI)
