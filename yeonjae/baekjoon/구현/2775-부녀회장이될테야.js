const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  //풀이
  const testCase = Number(input[0]);
  const curLocation = [];
  const result = [];
  let sum = 0;

  //반복문 testCase만큼 돌면서 구해야하는 위치(k층 n호)를 curLocation에 담아줌
  for (let i = 0; i < testCase; i++) {
    const curFloor = Number(input[2 * i + 1]);
    const curRoom = Number(input[2 * i + 2]);
    curLocation.push([curFloor, curRoom]);
  }

  //curLocation = [[1,3], [2,3]]
  for (let i = 0; i < curLocation.length; i++) {
    curFloor = curLocation[i][0];
    curRoom = curLocation[i][1];

    for (let j = 0; j <= curFloor; j++) {
      result[j] = [];

      for (let k = 1; k <= curRoom; k++) {
        if (j === 0) {
          result[j].push(k);
        } else {
          sum += result[j - 1][k - 1];
          result[j].push(sum);
          if (k === curRoom) {
            sum = 0;
          }
        }
      }
    }
    //floor에는 k층 n호를 구하기위한 누적값이 담겨져있음
    //2,3,4...k층을 구하기위해서는 아래층의 값을 알아야하기때문
    console.log(result[curFloor][curRoom - 1]);
  }
});
