function solution(s) {
  let result = 0;
  let [tempCount, sameCount, diffCount] = [0, 0, 0];

  for (let i = 0; i < s.length; i++) {
    tempCount++;
    sameCount++;

    for (let j = i + 1; j < s.length; j++) {
      tempCount++;
      s[i] === s[j] ? sameCount++ : diffCount++;

      if (sameCount === diffCount) {
        result++;
        i += tempCount - 1;
        [tempCount, sameCount, diffCount] = [0, 0, 0];
        break;
      }
    }
  }

  return tempCount > 0 ? result + 1 : result;
}
