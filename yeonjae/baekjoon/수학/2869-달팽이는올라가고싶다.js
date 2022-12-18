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
  const [climb, drop, treeHeight] = input[0].split(" ").map(Number);
  const date = Math.ceil((treeHeight - drop) / (climb - drop));

  console.log(date);
});

/*
하루에 올라가는 미터를 계산해서 treeHeight에서 나눠주면되겠다 => days = treeHeight / (climb - drop)  처음에 이렇게 생각했지만 도달한 직후 떨어지지않는다는점을 생각하지않았었다. 

(climb - drop) x days + drop = treeHeight 즉,
(treeHeight - drop) / (climb - drop) = days
도달한 경우, 미끄러지지 않는 만큼을 다시 더해준다 다음날 올라갈 수 있는 높이가 잔여높이보다 크다면 해당 값에서 소수점 이하의 값이 발생.해당 소수점을 올림(ceil)!*/
