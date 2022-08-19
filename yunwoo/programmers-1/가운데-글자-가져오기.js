function solution(s) {
  const middleStrIndex = Math.floor(s.length / 2);

  return s.length % 2 === 0
    ? s.substring(middleStrIndex - 1, middleStrIndex + 1)
    : s.substring(middleStrIndex, middleStrIndex + 1);
}
