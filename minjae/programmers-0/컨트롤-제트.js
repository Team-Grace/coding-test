function solution(s) {
  const arr = s.split(" ");
  const stack = [];
  let result = 0;

  arr.forEach((el) => {
    if (el === "Z") {
      result -= stack.pop();
    } else {
      result += +el;
      stack.push(+el);
    }
  });

  return result;
}

/**
 * (풀이)
 * 스택을 이용해서 풀었다. 기존에는 단순히 이전 값을 저장하는 prev를 이용했는데
 * 이렇게 할 경우 1 2 3 Z Z와 같은 케이스에서 결과값이 1이 나와야하지만 0이 나온다.
 * 이는 첫 번째 Z를 만나면 3을 빼는게 맞지만 2번째 Z에서는 2를 빼야한다.
 */
