function solution(array) {
  const obj = {};

  for (const i in array) {
    array[i] in obj ? (obj[array[i]] += 1) : (obj[array[i]] = 1);
  }

  const mostTimes = Math.max(...Object.values(obj));
  const mosFrequent = Object.keys(obj).filter((k) => obj[k] == mostTimes);

  return mosFrequent.length == 1 ? +mosFrequent[0] : -1;
}
