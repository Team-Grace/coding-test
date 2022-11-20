function solution(X, Y) {
  const xArr = [...X];
  const yArr = [...Y];
  let answer = "";

  for (let i = 0; i < 10; i++) {
    const xCount = xArr.filter((item) => item === String(i)).length;
    const yCount = yArr.filter((item) => item === String(i)).length;

    answer += i.toString().repeat(Math.min(xCount, yCount));
  }

  answer = [...answer].sort((a, b) => b - a).join("");

  if (answer === "") return "-1";
  else if (answer[0] === "0") return "0";
  else {
    return answer;
  }
}
