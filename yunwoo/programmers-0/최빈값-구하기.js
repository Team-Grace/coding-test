function solution(array) {
  const arrayConvert = array.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const maxValue = Math.max(...Object.values(arrayConvert));
  const objConvert = Object.entries(arrayConvert);
  const maxQuantity = objConvert.filter((v) => v[1] === maxValue);

  return maxQuantity.length === 1 ? parseInt(maxQuantity[0]) : -1;
}
