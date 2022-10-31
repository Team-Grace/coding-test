function solution(quiz) {
  const result = [];

  quiz.map((v) => {
    const tmp = v.split(" ");

    if (tmp[1] === "-") result.push(+tmp[0] - +tmp[2] === +tmp[4] ? "O" : "X");
    else result.push(+tmp[0] + +tmp[2] === +tmp[4] ? "O" : "X");
  });
  return result;
}

/**
 * quiz를 map함수로 돌려서 모두 쪼개주고, 그 배열에서
 * - 일때와 + 일때를 나눠 조건을 걸어준다.
 * 문자열 앞에 +를 붙여 수로 바꿔주고 계산해준다!
 */
