const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

function setNumber(idx) {
  return input[idx].split(" ").map(Number);
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const n = +input[0];
  const originData = setNumber(1).sort((a, b) => a - b);
  const findNumber = setNumber(3);
  let result = "";

  const binarySearch = (list, target) => {
    let [start, end] = [0, n];

    while (start < end) {
      const mid = Math.floor((start + end) / 2);

      // 대소 비교 범위 지정
      if (list === "upper") {
        if (target < originData[mid]) end = mid;
        else start = mid + 1;
      } else {
        if (target <= originData[mid]) end = mid;
        else start = mid + 1;
      }
    }

    return end;
  };

  findNumber.forEach((target) => {
    const count = binarySearch("upper", target) - binarySearch("lower", target);

    result += `${count} `;
  });

  console.log(result.trim());
});

/*
1) 처음 이분탐색 공부 후 적었던 풀이중 하나인데 응용을 어떻게 해야할까..? 고민을했다..
   그리고 계속 시간초과가 떠서 민재님 풀이를 참고해서 풀었다. 이분탐색 함수까진 만들었는데
   그 다음부터 어떻게 카운트를 세줘야 할지 몰라서 고민이 많았는데 forEach를 통해 비교해서
   값을 빼주는 방법이 있었다..! 생각을 못했던 방법이라 신기했다.
   나는 절반을 나누고 그 숫자를 찾으면(?).. 카운트를 해줘야겠다 생각을 했는데 막상 풀지는 못했다.
   어려웠던 문제지만 이분탐색에 대해서 공부할 수 있는 시간이었다.

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  if (list[mid] === target) return mid;

  // 대소 비교 범위 지정
  if (list[mid] > target) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}
return -1;
};
*/
