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
  const [n, l] = input;
  const alpha = {
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
  const decimal = 31;
  const m = 1234567891;
  let r = 1;
  let result = 0;

  for (let i = 0; i < +n; i++) {
    result += alpha[l[i]] * r;

    r *= decimal;
    r %= m;
  }

  console.log(result % m);
});

/**
 * 풀이
 * Mod m을 놓치면 50점밖에 맞지 못한다.
 * r은 처음에 31^0은 1이므로 1부터 곱해줘야 하기 때문에 최초에는 r = 1로 선언해주고, 그 이후로는 31(decimal)을 누적곱해줬다.
 * 이때 r을 1234567891(m)으로 매번 나눈 나머지를 할당한다.
 * 또한 마지막으로 결과값도 1234567891로 나눈 나머지를 출력해야한다.
 */
