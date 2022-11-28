function solution(dartResult) {
  const temp = [];
  const roundScoreArray = dartResult.split("");
  const scoreReg = /(0|1|2|3|4|5|6|7|8|9|10)/g;

  for (let i = 0; i < roundScoreArray.length; i++) {
    if (
      roundScoreArray[i] === "S" ||
      roundScoreArray[i] === "D" ||
      roundScoreArray[i] === "T"
    ) {
      if (roundScoreArray[i + 1] === "#" || roundScoreArray[i + 1] === "*") {
        temp.push(roundScoreArray.splice(0, i + 2));
        i = 0;
      } else {
        temp.push(roundScoreArray.splice(0, i + 1));
        i = 0;
      }
    }
  }

  const isOption = temp.map((item) =>
    item.find((el) => {
      if (el === "*") return "*";
      else if (el === "#") return "#";
    })
  );

  const multiplicationScore = temp.map((item, i) => {
    let matchNumber = Number(item.join("").match(scoreReg).join(""));

    if (item.includes("D")) matchNumber **= 2;
    else if (item.includes("T")) matchNumber **= 3;

    if (isOption[i + 1] === "*") matchNumber *= 2;
    if (isOption[i] === "*") matchNumber *= 2;
    if (isOption[i] === "#") matchNumber *= -1;

    return matchNumber;
  });
  return multiplicationScore.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

/*
(풀이)
먼저 스코어 문자열을 분리해서 배열로 만든 후 반복문으로 기존 배열의 요소가 없을때까지 반복해서
스코어, 보너스, 옵션 순으로 담아줬다. isOption함수로 보너스를 분리해주고 해당 인덱스 번호에 둔 뒤
배열을 순회하며 match로 숫자만 골라낸 후 D, T 일 경우와 isOption에 현재 요소와 현재요소인덱스+1 요소가 * 일경우
마지막으로 #이 나올 경우를 모두 조건식으로 계산해준 후 숫자를 반환한 뒤 reduce로 합쳐서 리턴.
*/
