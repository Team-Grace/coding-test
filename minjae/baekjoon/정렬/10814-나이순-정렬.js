const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let result = "";

  const members = input
    .slice(1)
    .map((member) => {
      const [age, name] = member.split(" ");
      return { age: +age, name };
    })
    .sort((a, b) => a.age - b.age)
    .forEach(({ age, name }) => {
      result += `${age} ${name}\n`;
    });

  console.log(result);
});
