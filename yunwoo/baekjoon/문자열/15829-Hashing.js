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
  const l = +input[0];
  const englishString = input[1];
  const m = 1234567891;
  const alpabet = {};
  let r = 1;
  let result = 0;

  Array.from(
    { length: 26 },
    (_, i) => (alpabet[String.fromCharCode(i + 97)] = i + 1)
  );

  for (let i = 0; i < l; i++) {
    result += (alpabet[englishString[i]] * r) % m;
    r = (r * 31) % m;
  }

  console.log(result % m);
});

/*
(풀이)
c++ 풀이 구글에서 보고 풀었습니다.
알파벳 객체를 이용해 주어진 알파벳 문자열의 개수만큼 반복을 돌며 더해주면 된다.
이때 문자열의 길이가 50일 경우 굉장히 큰 수가 나오므로 해시값을 서로소인 숫자 m으로
나눈 나머지를 더해 준다.
모듈러 연산? 이라고 하는데 음.. 잘 모르겠습니다 😂



(50점 풀이)
 const stringLength = +input[0];
  const englishString = input[1];
  const r = 31;
  // const m = 1234567891;
  const alpabet = {};
  let result = 0;

  Array.from(
    { length: 26 },
    (_, i) => (alpabet[String.fromCharCode(i + 97)] = i + 1)
  );

  for (let i = 0; i < stringLength; i++) {
    result += alpabet[englishString[i]] * r ** i;
  }

  console.log(result);
*/
