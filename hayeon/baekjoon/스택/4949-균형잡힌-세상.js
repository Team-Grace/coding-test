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
  const strList = input.slice(0, input.length - 1);
  let result = "";

  strList.forEach((str) => {
    const stack = [];
    const bracketObj = {
      ")": "(",
      "]": "[",
    };

    for (const char of str) {
      const bracketValues = Object.values(bracketObj);
      const bracketKeys = Object.keys(bracketObj);

      if (bracketValues.includes(char)) {
        stack.push(char);
      }

      if (bracketKeys.includes(char)) {
        if (stack.at(-1) === bracketObj[char]) {
          stack.pop();
        } else {
          stack.push(char);
        }
      }
    }

    result += stack.length > 0 ? "no\n" : "yes\n";
  });

  console.log(result);
});

/**
 * 풀이
 * 이번 풀이는 정말..나에게 쉽지 않았다. 혼자 풀때도 입력값이 이해가 안되서..
 * 스택문제여서 뭔가 빈 배열에 넣어주고 비교해야겠다? 는 생각은 했는데 쉽지않았다.
 * 그래서 구글링을 하면서 하나하나 이해하고 푸는데도 어렵고 잘 못풀었다.. 결국..
 * 그래서 민재님 풀이를 참고했는데 훨씬 이해가 잘됐다.
 * 이번에 멋사에서 자스배울때 Object.values와 keys에 대해서 엄청 자세하게 배웠는데
 * 개념만 배울땐 어렵고 긴가민가했는데 바로 여기서! 써먹고 다시 개념공부를 할 수 있어서 좋았다.
 * 민재님 풀이 방식으로 푸니까 빠르게 이해된거 같다..
 */

/* 구글링해서 풀이 참고했는데.. 너무 어렵다..... */
/* const bracketOpen = ["(", "["];
const bracketClosed = [")", "]"];
const ans = [];

input.slice(0, input.length-1).forEach((str)=> {
  let isNo = false;

  const stack = [];

  for(let i = 0; i < str.length; i++){
    if(bracketOpen.includes(str[i])) stack.push(str[i]);
  }
}); */
