function solution(my_str, n) {
  const result = [];
  const restLength = my_str.length % n;
  let tempStr = "";
  let i = 0;

  while (i < my_str.length - restLength) {
    tempStr += my_str[i++];

    if (i % n === 0) {
      result.push(tempStr);
      tempStr = "";
    }
  }

  while (i < my_str.length) {
    tempStr += my_str[i++];
  }

  return tempStr ? [...result, tempStr] : result;
}
