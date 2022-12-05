function solution(phone_number) {
  const numArr = phone_number.split("");
  const backNumber = numArr.splice(phone_number.length - 4, 4).join("");
  const frontNumber = numArr.join("").replace(/[0-9]/g, "*");

  return frontNumber + backNumber;
}

/**
 * 풀이
 * 뒤에 4자리를 splice()를 통해 값을 받아 놓은 후,
 * 잘라진 앞자리만을 replace로 대체해준다! 처음에 replace까지는 생각했는데..
 * 전체 문자열을 "*"로 변환해줄 때.. 어떻게 해야하지 많은 고민을 했다..
 * 정규표현식을 쓰는 것은 알았는데 /[0-9]/g 를 아예 까먹고 있었다...
 * 이 부분이 해결되니 문제가 잘 풀렸다!
 */
