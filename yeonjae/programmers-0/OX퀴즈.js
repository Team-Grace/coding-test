function solution(quiz) {
  const answer = [];
  let result;

  for (let i = 0; i < quiz.length; i++) {
    const calculationArr = quiz[i].split(" ");
    if (calculationArr[1] === "-") {
      result =
        parseInt(calculationArr[0]) - parseInt(calculationArr[2]) ===
        parseInt(calculationArr[4])
          ? "O"
          : "X";
    } else {
      result =
        parseInt(calculationArr[0]) + parseInt(calculationArr[2]) ===
        parseInt(calculationArr[4])
          ? "O"
          : "X";
    }
    answer.push(result);
  }
  return answer;
}
