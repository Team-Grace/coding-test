function solution(X, Y) {
  let result = "";

  X = X.split("");
  Y = Y.split("");

  for (let i = 0; i <= 9; i++) {
    const numX = X.filter((el) => Number(el) === i).length;
    const numY = Y.filter((el) => Number(el) === i).length;

    result += String(i).repeat(Math.min(numX, numY));
  }

  if (result === "") return "-1";
  if (Number(result) === 0) return "0";

  return result
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

/**
 * 풀이
 * 처음에는 숫자가 포함된 것에 따라 나누려고 했는데 복잡해지고 생각하기도 어려워 다시 풀었다.
 * 먼저 배열에 담기위해 쪼개주고 for문 안에서 해당 숫자가 아닌 배열의 길이를 구한다.
 * 만약 인덱스값과 배열안의 숫자가 같으면 그 만큼의 길이를 변수에 담아준다. (숫자는 0부터 9까지)
 * 그리고 결과값에 문자열로 바꾼 인덱스값을 두 변수 중 작은값 만큼 반복해 넣어준다.
 *
 * 만약 처음 예시 "100" 이면 i가 0일때 0의 개수는 2개이므로 numX = 2 이고
 * "2345" 일 때는 0의 개수가 0이므로 numY = 0 이다.
 * 결국 String(0).repeat(Math.min(2, 0)) 이므로 0을 0번 반복..
 * 이런식으로 값을 계속 찾아주면 된다.
 *
 * 동일한 값이 여러개일때도 (마지막예시 5가 3개일 때) 어처피 최소값만큼 반복해주므로 2번 반복된다.
 *
 * 결과값은 다시 배열에 넣을 수 있게 쪼개주고 내림차순으로 배열 후 합쳐주면 된다.
 */
