function solution(X, Y) {
  const numberObj = {};
  const result = [];

  for (el of X) {
    numberObj[el] = (numberObj[el] || 0) + 1;
  }
  for (el of Y) {
    if (numberObj[el]) {
      numberObj[el]--;
      result.push(el);
    }
  }

  if (Number(result.join("")) === 0 && result.length !== 0) {
    return String(Number(result.join("")));
  }

  return !result.length ? "-1" : result.sort((a, b) => b - a).join("");
}

/*
(풀이)
빈 객체에 문자열을 돌며 해당 요소의 프로퍼티를 만들고 다음 문자열도 순회를 돌며
객체에 같은 프로퍼티 네임을 가진 경우에만 그 값을 -1 해주고 result 배열에 push해준다.
문자열은 0이 2개일 경우 00 이 나오므로 조건문으로 0이 여러개일 경우를 확인해서 리턴해주고
배열이 비어있을경우 -1 아닐경우 내림차순으로 정렬한 문자열을 반환해준다.

(첫 풀이 시간초과)
function solution(X, Y) {
  let temp = [];
  const yArr = Y.split("");

  for (el of X) {
    const yIdx = yArr.indexOf(el);

    if (yIdx !== -1) {
      const yChar = yArr.splice(yIdx, 1).join("");

      temp.push(yChar);
    }
  }

  if (temp.length === 0) return "-1";

  const sortedResult = Number(temp.sort((a, b) => b - a).join(""));

  return String(sortedResult);
}
 */
