function solution(s) {
  let counts = [0, 0, 0]; // [temp, same, diff]
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    counts[0]++;
    counts[1]++;

    for (let j = i + 1; j < s.length; j++) {
      counts[0]++;
      s[i] === s[j] ? counts[1]++ : counts[2]++;

      if (counts[1] === counts[2]) {
        result++;

        i += counts[0] - 1;

        // 초기화
        counts = [0, 0, 0];
        break;
      }
    }
  }

  return counts[0] ? result + 1 : result;
}
