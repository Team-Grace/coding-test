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
  const [num, strings] = input;
  const mod = 1234567891;
  let r = 1;
  let result = 0;

  for (let i = 0; i < +num; i++) {
    // result += Math.pow(31, strings.charCodeAt(i) - 96);
    result += (strings.charCodeAt(i) - 96) * r;
    result %= mod;

    r *= 31;
    r %= mod;
  }

  console.log(result);
});

/**
 * 풀이
 * 문제 읽을때 먼가 어려워서 풀기 힘들겠다고 직감했다.
 * 하지만 잘 읽어보니 생각보다 어렵지는 않았던거 같다!
 * 처음에는 알파벳을 배열로 받아주려고 했는데 생각해보니 a가 1부터 시작해야해서
 * 순서를 맞춰주는데 힘들거 같다고 생각했다. 그래서 유니코드값을 반환해주는 charCodeAt을 사용했다.
 * a의 값이 97이기 때문에 96을 빼서 1부터 시작하도록 맞춰줬다.
 * 그리고 Math.pow()로 풀었는데 계속 50점이 나와 찾아보니
 * 31^49까지가면 범위를 벗어나 100점을 받을 수 없다고 한다..
 * 그래서 차라리 31을 누적곱하고 모듈로 나눠주는 것이 더 좋다. (**이랑 Math.pow()랑 똑같은 개념인데..왜그랬을까)
 * 그리고 결과값도 mod M으로 나누라고 했으니 누적된 합을 mod로 나눠주고 값을 반환하면 된다!!
 */

/*
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const decimal = 31;
  const m = 1234567891;
  let result = 0;

  for (let i = 0; i < Number(n); i++) {
    result += alphabet[i] * Math.pow(decimal, i - 1);
  }
  */
