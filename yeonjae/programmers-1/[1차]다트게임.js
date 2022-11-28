function solution(dartResult) {
  const answer = [];
  let dartScore = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i].match(/[0-9]/)) {
      if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
        dartScore = 10;
        i++;
      } else dartScore = dartResult[i];
    } else if (dartResult[i] === "S") answer.push(Math.pow(dartScore, 1));
    else if (dartResult[i] === "D") answer.push(Math.pow(dartScore, 2));
    else if (dartResult[i] === "T") answer.push(Math.pow(dartScore, 3));
    else if (dartResult[i] === "*") {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    } else if (dartResult[i] === "#") answer[answer.length - 1] *= -1;
  }

  return answer.reduce((acc, cur) => acc + cur);
}

//다트결과를 담아줄 배열, answer(최종으로 더해줄 값을 담을것이다)
//answer에 담기위해 연산에 필요한 숫자 dartScore

//dartResult의 길이만큼 반복문을 통해 돌면서 먼저 0-9가 있는지 체크 (10 or 0-9) dartScore에 숫자를 담아주고
//문제에서 말한대로 else if문을 사용했다 (조건별로 else if가 있어서 좀 복잡해보이는거는 리팩토링이 필요할것같다)
//S,D,T 를 통해 제곱을해주어야하기때문에 먼저 구해준 dartScore에 pow를 사용해서 1,2,3제곱을 해주고
//옵션인 *, # *은 해당하는answer, 그 이전의 answer에 2를 곱해주고 / #은 단순히 해당하는answer에 마이너스를 해준다
//이렇게 구한 각각의 요소는 answer 배열에 담겨져 있고 이 배열의 합을 구하기위해 reduce를 사용해주었다.
