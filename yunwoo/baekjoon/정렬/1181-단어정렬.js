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
  const set = new Set(input);
  const stringArray = [...set];
  let result = "";

  stringArray.shift();
  stringArray.sort((a, b) => {
    if (a.length === b.length) {
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    }

    return a.length - b.length;
  });

  for (el of stringArray) {
    result += `${el}\n`;
  }

  console.log(result);
});

/*
(풀이) 
set 객체를 이용해 중복을 제거해 준 후 input[0]에 주어지는 문자열의 개수를 shift() 로 빼준 뒤
나머지는 문자열의 length를 비교하여 정렬하는데 동일할 경우 알파벳순서대로 정렬해준다.
첫번째 풀이에서 sort를 2번 사용했는데 시간과 메모리차이는 별로 나지 않는거같다.

현재 풀이 : 19284 KB , 280ms
리팩 전 풀이 : 19848 KB , 360ms


(리팩토링 전 코드 sort 두번 사용)
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
  const set = new Set(input);
  const stringArray = [...set];
  let result = "";

  stringArray.shift();
  stringArray.sort().sort((a, b) => a.length - b.length);

  for (el of stringArray) {
    result += `${el}\n`;
  }

  console.log(result);
});

*/
