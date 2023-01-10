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
  const stack = [];
  const commands = input.slice(1).map((el) => el.split(" "));
  let result = "";

  const commandExec = {
    push: (value) => {
      stack.push(value);
    },
    pop: () => {
      result += stack.length ? `${stack.pop()}\n` : "-1\n";
    },
    size: () => {
      result += `${stack.length}\n`;
    },
    empty: () => {
      result += stack.length ? "0\n" : "1\n";
    },
    top: () => {
      result += stack.length ? `${stack.at(-1)}\n` : "-1\n";
    },
  };

  commands.forEach((el) => {
    const [command, value] = el;
    const exec = commandExec[command];

    exec(value);
  });

  console.log(result);
});
