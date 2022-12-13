const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이2 1 5
  const [day, night, height] = input[0].split(" ").map(Number);

  const result = Math.ceil((height - night) / (day - night));

  console.log(result);
});

/**
 * 풀이
 * 처음에는 for문으로 접근하려다가 뭔가 아닌 것 같아서 다시 생각을 했다.
 * 노트에다 규칙찾으려고 써봤는데 높이값을 낮에올라간 값 - 밤에 미끄러진값 으로 나눠주면 됐다.
 * 처음엔 단순하게 생각해서 height/(day-night)으로 해줬는데 실패했다.
 * height에 도달했을 때 미끄러지지 않기 때문에
 * 미끄러지지않는 값을 빼주기위해 height-night를 해줘야 했다. (이부분이 좀 헷갈렸다..!)
 * 그리고 나누어 떨어지지 않는 숫자가 나올 수 있으므로 Math.ceil을 사용해준다.
 */
