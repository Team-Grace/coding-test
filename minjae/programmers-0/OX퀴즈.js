function solution(quiz) {
  return quiz.map((el) => {
    const [operand1, operator, operand2, equalSign, formulaResult] = el
      .split(" ")
      .map((el) => (isNaN(+el) ? el : +el));

    const sum =
      operator === "-" ? operand1 + operand2 * -1 : operand1 + operand2;

    return sum === formulaResult ? "O" : "X";
  });
}
