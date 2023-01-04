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
  const testCase = +input[0];
  let result = "";

  for (let i = 1; i <= testCase; i++) {
    let count = 0;

    for (const bracket of input[i]) {
      count += bracket === "(" ? 1 : -1;

      if (count < 0) break;
    }

    result += count === 0 ? "YES\n" : "NO\n";
  }

  console.log(result);
});

/**
 * 풀이
 * 저번 문제보단 좀 쉬웠다!!.. 뭔가..큐보다 더 어려운거 같기도 하다.
 * 전 문제를 풀면서 쓰고, 복습하면서 배운 for...of로 다시 풀어봤다.
 * 반복문을 돌면서 input의 인덱스값이 "("와 같으면 1을, 다르면 -1을 더해준다.
 * 만약 VPS면 합이 0이 나오게 될 것이고 0이면 YES, 아니면 NO를 반환한다.
 *
 * 근데 여기서  질문이..있습니다!
 * if (count < 0) break; 을 꼭 써줘야 하는 이유가 있을까요?
 * 또 결과값을 배열로 받고 (push) join("\n")으로 해줘도 값은 같은데
 * 이때 결과값을 문자열로 받고 지금처럼 쓰는게 더 효율적인가요..?
 */
