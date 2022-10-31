function solution(num, total) {
  let startNum = 0;

  let arrSum = new Array(num)
    .fill(0)
    .map((el, i) => i)
    .reduce((a, b) => a + b, 0);

  while (arrSum !== total) {
    if (arrSum < total) startNum++;
    else startNum--;

    arrSum = new Array(num)
      .fill(0)
      .map((el, i) => i + startNum)
      .reduce((a, b) => a + b, 0);
  }
  return new Array(num).fill(0).map((el, i) => i + startNum);
}

/**
 * 풀이
 * 연속되는 숫자를 구하는거라 최근에 고민해봤던
 * 배열에 0을 미리 넣어놓고 숫자를 더하는 법? 으로 풀어봤다.
 * 시행착오를 겪다가 어려워서 구글링해봤더니 비슷하게 풀이를 한 사람이있어서 참고를 했다!
 */
