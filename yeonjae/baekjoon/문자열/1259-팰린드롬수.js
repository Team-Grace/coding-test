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
  let result = "";

  for (let i = 0; i < input.length; i++) {
    const reverse = input[i].split("").reverse().join("");

    if (input[i] !== "0") {
      result += input[i] === reverse ? "yes \n" : "no \n";
    }
  }

  console.log(result);
});

//input의 길이만큼 순회하면서 매 줄마다 yes / or를 담아줄 변수 result
//길이만큼 돌때 문자를 뒤집었을때 input[i]가 0이 아니고
//input[i]와 reverse한 문자가 같으면 yes, 아니면 no를 result에 넣어준다
//여러줄 , 각줄마다 result를 넣어줘야하기때문에 \n를 통해 띄어쓰기를 해준다
//각 줄마다 최종적으로 담긴 값을 출력해준다.
