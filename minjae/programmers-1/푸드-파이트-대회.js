function solution(food) {
  const foodCounts = food
    .slice(1)
    .reverse()
    .map((el) => el - (el % 2));

  const result = foodCounts.reduce(
    (acc, cur, i) => {
      const numberOfFood = foodCounts.length - i;

      while (cur) {
        acc = [numberOfFood, ...acc, numberOfFood];
        cur -= 2;
      }

      return acc;
    },
    [0]
  );

  return result.join("");
}

// repeat풀이 (하연님 풀이)
function solution(food) {
  const leftSide = [];

  for (let i = 1; i < food.length; i++) {
    const count = Math.floor(food[i] / 2);

    leftSide.push(String(i).repeat(count));
  }

  return `${leftSide.join("")}0${leftSide.reverse().join("")}`;
}
