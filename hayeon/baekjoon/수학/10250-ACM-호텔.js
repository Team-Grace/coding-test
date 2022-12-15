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
  //테스트 케이스
  const testCase = +input[0];
  let result = "";

  for (let i = 1; i <= testCase; i++) {
    const [h, w, n] = input[i].split(" ").map(Number);
    let floor = n % h;
    let room = Math.ceil(n / h);

    if (floor === 0) {
      floor = h;
    }

    room < 10 ? (room = `0${room}`) : room;

    result += `${floor}${room}\n`;
  }

  console.log(result);
});

/**
 * 풀이
 * 풀이가 잘못된 줄 알고 계속 바꿨는데...
 * 테스트케이스를 i <= testCase가 아니라 i < testCase로 해서
 * 계속 두번째 값이 안나왔다..
 * 꼭대기층은 층과 손님순서로 나눈 나머지가 0일것이고 아닐경우에는 그 나머지값이 된다.
 * 그리고 방 호수는 층과 손님순서를 나눴을때의 값이 된다.
 * 이때 Math.ceil을 이용해 올림해 값을 반환하면 된다.
 * 그리고 방호수가 10 이하일때 앞에 0을 붙여서 값을 넣어주어야 한다.
 */

/*if (guest % floor === 0) {
  //꼭대기층
  h = floor;
  n = guest / floor;
} else if (guest % floor !== 0) {
  h = guest % floor;
  n = Math.ceil(guest / floor);
}
*/
