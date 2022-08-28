// 하연
function solution(n) {
  const ternary = n.toString(3);
  const reversed = ternary.split("").reverse().join("");
  const answer = parseInt(reversed, 3);

  return answer;
}

// 민재, 연재
function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

// 윤우
function solution(n) {
  const convertNumber = n.toString(3).split("").reverse().join("");
  const againConvertNumber = parseInt(convertNumber, 3);

  return againConvertNumber;
}
