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
  let startNum = n - String(n).length * 9;

  let answer = 0;

  while (true) {
    startNum++;
    let sum = startNum;

    for (let i = 0; i < String(startNum).length; i++) {
      sum = sum + Number(String(startNum).charAt(i));
    }
    if (sum === n) {
      answer = startNum;
      break;
    }
    if (startNum >= n) {
      answer = 0;
      break;
    }
  }
  console.log(answer);

  /*
  const inputData = +input[0];
  const startNum = inputData - String(inputData).length * 9;
  const stack = [];

  for (let i = startNum; i < inputData; i++) {
    const digit = i
      .toString()
      .split("")
      .map((el) => parseInt(el))
      .reduce((acc, cur) => acc + cur, 0);

    console.log(digit);
  }
*/

  /*
  const inputData = Number(input);
  let result = 0;

  for (let i = 0; i < inputData; i++) {
    let sum = 0; //각 자리수, 후보값의 합

    const candidateValue = i; //0부터 시작하는 후보값

    const strValue = candidateValue.toString(); //숫자를 문자열로

    for (let j = 0; j < strValue.length; j++) {
      sum += Number(strValue[j]);
      console.log(sum);
    }

    sum += candidateValue;

    if (sum === inputData) {
      result = candidateValue;
      break;
    }
  }

  console.log(result);
*/
});
