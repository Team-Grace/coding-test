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
  let result = "";

  for (let i = 1; i < input.length - 1; i += 2) {
    const [floor, room] = input.slice(i, i + 2).map(Number);
    const floors = [Array.from({ length: room }, (_, idx) => idx + 1)];

    for (let j = 1; j <= floor; j++) {
      const tempFloor = [];
      let sum = 0;

      for (let k = 0; k < room; k++) {
        sum += floors[j - 1][k];
        tempFloor.push(sum);
      }
      floors.push(tempFloor);
    }
    result += `${floors[floor].at(-1)}\n`;
  }
  console.log(result);
});

/**
 * 풀이
 * shift는 가급적 안써주는 것이 좋다. (리소스가 큰 메서드이기 때문..)
 * 그래서 slice로 잘라준다. input(i, i+2)를 통해 잘라주면 [1, 3]이 나오고 map을 통해 숫자로 변환해 저장!
 * floors에는 room갯수만큼 배열을 넣을 공간을 만들어주고 인덱스값에 1씩 더해 값을 넣어준다.
 * floors에 이중배열을 사용해서 구한 값들을 sum에 더해 넣어준다.
 * 예시로 [1, 3] 일때
 * floor = 1, room = 3 이므로 k가 0일때 sum에는 floors[0][0]이 누적되고 tempFloor에 들어가게된다.
 * 차례대로 1, 3, 6이 tempFloor에 들어가게 되고, 결과값에는 가장 마지막값인 6이 출력된다!
 */
