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
  const numTypeArr = (str) =>
    str.split(" ").map((numString) => Number(numString));

  const [cardNum, dealNum] = numTypeArr(input[0]);
  const numList = numTypeArr(input[1]);

  let tempSum = 0;
  let result = 0;

  for (let i = 0; i < cardNum; i++) {
    for (let j = i + 1; j < cardNum; j++) {
      for (let k = j + 1; k < cardNum; k++) {
        tempSum = numList[i] + numList[j] + numList[k];

        if (tempSum <= dealNum) {
          result = Math.max(result, tempSum);
        }
      }
    }
  }

  console.log(result);
});

/* 처음에 주어진 N은 카드의 개수이기때문에 N만큼 반복문을 돌면서 카드 3개합을 구해야한다(카드리스트는 두번째줄에 주어지게됨)
주어진 str를 먼저 number로 변환해주는 함수를 만들어주었다.
cardNum만큼 반복문을 돌면서 cardList 3개의 합은 sum이라는 변수에 넣어준다.
sum과 result를 비교해서 sum이 기존값 result보다 큰 경우이면서(3개합의 최댓값) && dealNum보다 작을때 (조건) result에 들어가게된다 
최종적으로 result를 리턴! */
