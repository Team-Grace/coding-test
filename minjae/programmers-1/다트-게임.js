function getMatchedString(str) {
  const bonus = str.match(/[S|D|T]{1}/g)?.[0];
  const option = str.match(/[*|#]/g)?.[0];
  const point = +str.match(/\d{1,2}/g)?.[0];

  return [point, bonus, option];
}

function solution(dartResult) {
  const regex = /\d{1,2}[S|D|T]{1}[*|#]?/g;
  const bonusObj = { S: 1, D: 2, T: 3 };
  const optionObj = { "*": 2, "#": -1 };

  const splitDartResult = dartResult.match(regex);
  const result = [];

  splitDartResult.forEach((el, i) => {
    let [point, bonus, option] = getMatchedString(el);

    point **= bonusObj[bonus];
    point *= optionObj[option] || 1;

    if (option === "*") result[i - 1] *= 2;

    result.push(point);
  });

  return result.reduce((acc, cur) => acc + cur, 0);
}
