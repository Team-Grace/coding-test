function solution(babbling) {
  return babbling.reduce((acc, cur) => {
    const regex = /aya|ye|woo|ma/g;
    const replacedBabbling = cur.replace(regex, "");

    return replacedBabbling === "" ? acc + 1 : acc;
  }, 0);
}

//너무 복잡해져서,,, 민재님 코드 참고
//정규표현식 활용하는 코드가 제일 깔끔할 것 같다
