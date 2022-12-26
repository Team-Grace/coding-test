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
  input.shift();

  const physicalList = input.map((el) => el.split(" ").map(Number));
  const result = [];

  for (let i = 0; i < physicalList.length; i++) {
    let grade = 1;
    for (let j = 0; j < physicalList.length; j++) {
      if (i !== j) {
        if (
          physicalList[i][0] < physicalList[j][0] &&
          physicalList[i][1] < physicalList[j][1]
        )
          grade++;
      }
    }
    result.push(grade);
  }

  console.log(result.join(" "));
});

// 몸무게와 키가 담긴 배열을 통해 이중for문을 돌면서 작으면 grade를 하나 올려준다
// 등수만 뽑아내면되기때문에 등수를 배열에 담아준 뒤 문자열로 변환해 출력
