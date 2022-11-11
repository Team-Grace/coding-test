function solution(babbling) {
  return babbling.reduce((acc, cur) => {
    const regex = /aya|ye|woo|ma/g;
    const replacedBabbling = cur.replace(regex, "");

    return replacedBabbling === "" ? acc + 1 : acc;
  }, 0);
}
