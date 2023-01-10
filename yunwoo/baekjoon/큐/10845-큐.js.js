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
  const commands = input.slice(1).map((el) => el.split(" "));
  const queue = [];
  let result = "";

  const commandObj = {
    push: (value) => queue.push(value),
    pop: () => {
      result += queue.length ? `${queue.shift()}\n` : "-1\n";
    },
    size: () => {
      result += `${queue.length}\n`;
    },
    empty: () => {
      result += queue.length ? "0\n" : "1\n";
    },
    front: () => {
      result += queue.length ? `${queue[0]}\n` : "-1\n";
    },
    back: () => {
      result += queue.length ? `${queue[queue.length - 1]}\n` : "-1\n";
    },
  };

  commands.forEach((el) => {
    const [command, value] = el;

    const exec = commandObj[command];

    exec(value);
  });

  console.log(result);
});

/*
(풀이)
어제 배운 객체를 활용하여 풀이.
메서드들을 객체에 정의 해두고 주어진 명령어 배열을 이용해
result에 값을 넣어주는 형태.
exec의 뜻이 리눅스의 명령을 실행하라는 뜻이라는데 이게 맞는지 궁금합니다!
*/
