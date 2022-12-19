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
  const M = 1234567891;
  const DECIMAL = 31;
  const n = +input[0];
  const alphabetStr = input[1];
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let sum = 0;
  let r = 1;

  for (let i = 0; i < n; i++) {
    sum += alphabet[alphabetStr[i]] * r;
    r = (r * DECIMAL) % M;
  }

  console.log(sum % M);
});

// r = (r * 31) % M 이부분에서 처음에 r *= 31 % M을 해줬는데
// 우선순위가 할당연산자가 낮다는걸 인지하지못해서 원하는 결과를 도출하지못했다.
// 그래서 아예 r에게는 곱한뒤에 나누도록 식을 만들어주었다.

// 알파벳에 해당하는 숫자에 31의 (인덱스)제곱을 누적해서 더해주는문제인데,
// 너무 숫자가 커지는경우에 1234567891로 나눈 나머지를 더해주어야하며 결과값도 똑같이
// M으로 나눈 나머지를 출력한다.
