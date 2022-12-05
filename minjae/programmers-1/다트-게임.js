function getMatchedString(str) {
  const bonus = str.match(/[S|D|T]{1}/g)?.[0];
  const option = str.match(/[*|#]/g)?.[0];
  const point = +str.match(/\d{1,2}/g)?.[0];

  return [point, bonus, option];
}

function solution(dartResult) {
  const allRegex = /\d{1,2}[S|D|T]{1}[*|#]?/g;
  const bonusObj = { S: 1, D: 2, T: 3 };
  const optionObj = { "*": 2, "#": -1 };

  // allRegex를 이용해 1S2D*3T인 경우 ["1S", "2D*", "3T"]로 분리
  const splittedDartResult = dartResult.match(allRegex);
  const result = [];

  splittedDartResult.forEach((el, i) => {
    let [point, bonus, option] = getMatchedString(el);

    // 객체로 매핑해서 반복되는 코드 개선
    point **= bonusObj[bonus];
    point *= optionObj[option] || 1;

    // *인 경우 그 앞에있는 요소도 2배해줘야 되기 때문에 이를 대응 코드
    if (option === "*") result[i - 1] *= 2;

    result.push(point);
  });

  return result.reduce((acc, cur) => acc + cur, 0);
}
