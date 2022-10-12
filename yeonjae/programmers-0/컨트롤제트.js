function solution(s) {
  const arr = s.split(" ");
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Z") {
      result.pop();
    } else {
      result.push(+arr[i]);
    }
  }

  return result.reduce((a, b) => {
    return a + b;
  }, 0);
}
