function solution(n) {
  const convertNumber = n.toString(3).split("").reverse().join("");
  const againConvertNumber = parseInt(convertNumber, 3);

  return againConvertNumber;
}

/*
(풀이)
주어진 n 을 toString으로 3진법으로 변경하고 split으로 각각의 요소로 나눠준 뒤
reverse 메서드로 위치를 변경한 후 합쳐준다. 이 후 parseInt를 이용해 다시 3진법으로 변환해준다.
*/
