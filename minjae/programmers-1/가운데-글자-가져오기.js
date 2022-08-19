function solution(s) {
  const midIdx = Math.floor(s.length / 2);

  return s.length % 2 === 1
    ? s.slice(midIdx, midIdx + 1)
    : s.slice(midIdx - 1, midIdx + 1);
}

console.log(solution("abcde"));
console.log(solution("qwer"));
