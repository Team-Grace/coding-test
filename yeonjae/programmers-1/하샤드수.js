function solution(x) {
  const arr = String(x).split("");
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return x % sum == 0 ? true : false;
}

/*
(풀이)
먼저 주어진 x를 배열로 요소별로 나누어준 후(split)
x를 요소의 합으로 나누어서, 나누어 떨어지면 하샤드수이기때문에 true
그게아니면 false를 리턴해준다!
*/
