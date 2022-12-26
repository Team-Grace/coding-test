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
  const n = +input[0];
  const title = "666";
  let num = 666;
  let arr = [];

  arr.push(num);

  while (arr.length !== n) {
    num++;

    if (String(num).includes(title)) {
      arr.push(num);
    }
  }

  console.log(arr[arr.length - 1]);
});

/**
 * 풀이
 * 처음에 문제를 이해하는데 어려웠다. 작은 숫자들은 알겠는데 큰 숫자들은 출력이 왜 저렇게 나오는지
 * 이해가 되지 않았다. 하지만 제목에 "666"이 포함되어야 하므로 includes를 사용해야겠다고 생각이 들었다.
 * "666"이 포함된 숫자를 담을 배열 arr을 미리 만들어 놓고 배열에 넣어준다.
 * 반복문을 통해 숫자를 1씩 증가시키고 다시 num을 문자열로바꿔 문자에 "666"이 포함되면 배열에 넣어주면된다.
 * 배열에 666을 포함한 숫자를 담았을때 arr배열의 길이가 n이 되면 n번째 숫자를 찾은것이므로
 * 그 조건식을 통해 답을 구해주면 된다.
 */
