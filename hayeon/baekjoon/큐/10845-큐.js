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
  const queue = [];
  const commands = input.slice(1).map((el) => el.split(" "));
  let result = "";

  const commandExec = {
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
    const exec = commandExec[command];

    exec(value);
  });

  console.log(result);
});
