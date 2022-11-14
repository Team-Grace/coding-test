function solution(babbling) {
  const regex = /aya|ye|woo|ma/g;

  return babbling.reduce((acc, cur) => {
    const replacedBabbling = cur.replace(regex, "");

    return !replacedBabbling ? acc + 1 : acc;
  }, 0);
}
