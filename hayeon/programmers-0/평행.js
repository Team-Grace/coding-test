function solution(dots) {
  let inclinationArr = [];
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      inclinationArr.push(
        (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0])
      );
    }
  }
  let setArr = new Set();

  for (let el of inclinationArr) {
    setArr.add(el);
  }

  return [...setArr].length === inclinationArr.length ? 0 : 1;
}

/**
 * 풀이
 * 처음에는 어렵다고 생각했고 식을 잘 못세웠다.
 * 기울기를 이용해서 풀었고 배열의 길이가 같다면 1 (기울기가 겹칠경우)
 * 다르면 0을 반환한다!
 */
