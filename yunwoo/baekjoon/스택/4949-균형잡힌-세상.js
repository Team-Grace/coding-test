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
  const stringArr = input.slice(0, input.length - 1);
  let result = "";

  stringArr.forEach((string) => {
    const stack = [];
    const BracketsArray = string.replace(/[a-zA-Z]|(\s*)/g, "").split("");

    if (BracketsArray.length === 0) result += "yes\n";

    BracketsArray.forEach((el) => {
      const notSorted = stack.length === 0;

      if (el === "(" || el === "[") stack.push(el);
      else if (el === ")") {
        if (notSorted || stack[stack.length - 1] !== "(") stack.push(el);
        else stack.pop();
      } else if (el === "]") {
        if (notSorted || stack[stack.length - 1] !== "[") stack.push(el);
        else stack.pop();
      }
    });

    if (stack.length !== 0) result += "no\n";
    else result += "yes\n";
  });

  console.log(result.trim());
});

/*
(풀이)
주어진 문자열을 배열 요소로 한줄씩 나눠주고
배열을 순회하면서 stack배열을 만들어 주고 replace를 이용해 영문자를 제거한 후 split으로 배열로 만들어주고
배열 요소가 아예 없는 경우 result에 바로 yes를 넣어주고 있을경우 괄호만 남은 문자열 순회를 돌며
괄호의 짝이 맞는지 확인해 준다. ( [ 는 바로 stack배열에 push하고 닫는 괄호가 올때 stack 배열의 마지막
요소와 비교해서 해당 괄호가 현재 요소의 괄호가 다르면 stack에 push 같으면 마지막 요소를 pop해준다.
문자열 반복문이 끝나면 result에 stack의 요소개수를 확인해 요소개수가 있으면 no 없으면 yes를 넣어 반환한다.
*/
