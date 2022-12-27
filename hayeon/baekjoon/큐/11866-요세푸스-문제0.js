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
  const [n, k] = input[0].split(" ").map(Number);
  // const queue = [];
  const result = [];

  //큐 생성
  /*   for (let i = 1; i <= n; i++) {
    queue.push(i);
  } */
  const queue = Array.from({ length: n }, (v, i) => i + 1);

  while (queue.length !== 0) {
    for (let i = 0; i < k - 1; i++) {
      const preNum = queue.shift();
      queue.push(preNum);
    }
    result.push(queue.shift());
  }

  console.log(`<${result.join(", ")}>`);
});

/**
 * 풀이
 * 먼저 큐에 숫자를 1~n까지 추가해준다. 반복문을 이용해서 넣어도 되고,
 * 인덱스를 이용해 직접 배열을 만들수도 있다.
 * 그리고 큐 배열의 길이가 0이 아닐때까지 반복해주는데
 * k 번째가 되기 이전 숫자들을 k - 1번 떼주고 그 숫자들을 다시 맨 뒤에 넣는다.
 * 그리고 k번째 되는 숫자를 삭제함과 동시에 결과값을 넣는 배열 맨 뒤에 넣어준다.
 * 마지막으로 <> 안에 , 로 구분해 출력해주면 된다.
 */
