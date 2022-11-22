function solution(food) {
  let answer = "";

  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      answer += i;
    }
  }

  const opponentAnswer = answer.split("").reverse().join("");

  return answer + "0" + opponentAnswer;
}
