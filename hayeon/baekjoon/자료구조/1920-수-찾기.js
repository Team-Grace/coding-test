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
  const arrayA = new Set(input[1].split(" ").map(Number));
  const arrayM = input[3].split(" ").map(Number);
  let result = [];

  arrayM.forEach((number) => {
    arrayA.has(number) ? result.push(1) : result.push(0);
  });

  console.log(result.join("\n"));
});

// arrayA.has(number) ? console.log(1) : console.log(0);

/**
 * 풀이
 * set과 has를 이용해서 풀었던 문제다. M에 있는 숫자가 A에도 있는지 확인해야하는데
 * 이때 arrayM 배열을 돌면서 확인해준다.
 * arrayM의 숫자가 arrayA에도 가지고 있으면 결과값에 1을 넣어주고, 없으면 0을 넣어준다.
 * 처음에는 바로 console로 출력하도록 했는데 시간초과가 나왔다.
 * 그래서 set으로 풀어도 시간초과가 나오는건가 싶었는데 한개를 검색할때마다
 * 1과 0을 출력을 해주기 때문에 시간초과가 발생하는건가 생각이 들었다.
 * 따라서 console.log()에 담지말고 결과값을 담는 변수에 저장해주고 join해서 출력해주니 통과했다.
 */
