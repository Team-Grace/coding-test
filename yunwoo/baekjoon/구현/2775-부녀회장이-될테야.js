const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const t = +input[0];
  const testCase = [];

  for (let i = 1; i < t * 2; i = i + 2) {
    const k = Number(input[i]);
    const n = Number(input[i + 1]);

    testCase.push([k, n]);
  }

  for (let i = 0; i < t; i++) {
    const k = testCase[i][0];
    const n = testCase[i][1];
    const result = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

    for (let i = 0; i <= n; i++) {
      result[0][i] = i;
    }

    for (let j = 1; j <= k; j++) {
      for (let k = 1; k <= n; k++) {
        result[j][k] = result[j - 1][k] + result[j][k - 1];
      }
    }

    console.log(result[k][n]);
  }
});

/**
 * (풀이)
 * 구글링 도움을 받았습니다..
 * 테스트케이스의 층과 호수를 모은 2중 배열을 만들고
 * 2중배열을 이용해 for문을 돌며 내부에서 다시 배열을 만들어 0층의 호수를 채워주고
 * 0층의 값을 이용해 2중 for문을 돌면서 1층부터 값을 채워준다. 값은 아래층의 현재 호수 + 현재 층의 이전 호수 를 더해 값을 도출해낸다.
 */

/*
(실패 풀이)
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const t = +input[0];
  const k = +input[input.length - 2];
  const n = +input[input.length - 1];
  const result = [];

  for (let i = 0; i <= k; i++) {
    const temp = [];

    for (let j = 1; j <= n; j++) {
      temp.push(j);
    }

    result.push(temp);
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j < n; j++) {
      result[i][j] = result[i - 1][j] + result[i][j - 1];
    }

    console.log(result[i][n - 1]);
  }
});
*/
