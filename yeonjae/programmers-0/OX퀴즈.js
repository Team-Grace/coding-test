function solution(quiz) {
  const answer = [];
  let result;

  for (let i = 0; i < quiz.length; i++) {
    const newArr = quiz[i].split(" ");
    if (newArr[1] === "-") {
      result =
        parseInt(newArr[0]) - parseInt(newArr[2]) === parseInt(newArr[4])
          ? "O"
          : "X";
    } else {
      result =
        parseInt(newArr[0]) + parseInt(newArr[2]) === parseInt(newArr[4])
          ? "O"
          : "X";
    }
    answer.push(result);
  }
  return answer;
}
