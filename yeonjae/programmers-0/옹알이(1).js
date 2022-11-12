function solution(babbling) {
  const arr = ["aya", "ye", "woo", "ma"];
  let answer = 0;
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    if (babbling[i] === arr[i]) answer++;
    else if (babbling[i] !== arr[i]) {
      let split = babbling[i].split("").join("");
      for (let j = 0; j < split.length; j++) {
        if (split.includes(arr[i])) {
          count++;
          if (count < 1) {
            answer++;
          }
        }
      }
      return answer;
    }
  }
}
