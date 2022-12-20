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
  input.splice(0, 1);

  const setArr = [...new Set(input)];
  setArr.sort();
  setArr.sort((a, b) => a.length - b.length);

  console.log(setArr.join("\n"));
});

/**
 * 풀이
 * 처음에는 input[0]을 숫자형으로 변환 후 반복문 안에서 배열에 값을 넣어줬다.
 * 근데 굳이 그러지않고 splice를 이용해서 앞 테스트케이스 숫자를 자르고
 * 나머지 문자 배열들만 이용해서 문제를 풀어줘도 된다.
 * 먼저 중복되는 문자들을 빼준 배열을 새로 만들고, 사전순으로 먼저 정렬해준다.
 * 그리고 사전순으로 정렬된것을 다시 문자열 길이에 따라 정렬해주면 된다.
 */

/**
 * 처음 풀이
const testCase = +input[0];
  let arr = [];

  for (let i = 1; i <= testCase; i++) {
    arr.push(input[i]);
  }

  //중복제거
  const setArr = [...new Set(arr)];

  // 사전순으로 정렬
  setArr.sort();

  //길이에 따라서 오름차순 정렬
  setArr.sort((a, b) => a.length - b.length);

  console.log(setArr.join("\n"));
 */
