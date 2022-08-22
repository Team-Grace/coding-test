function solution(arr) {
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    const isValid = stack.includes(arr[i]);
    const stackLastElement = stack[stack.length - 1];

    if (isValid && stackLastElement === arr[i]) continue;
    stack.push(arr[i]);
  }
  return stack;
}

/* 
  (풀이)
  현재 요소가 stack에 이미 포함되어있으면서, stack의 마지막 요소와 같다면
  연속하는 중복 요소이기 때문에 continue로 건너뛴다. 
  그렇지않으면 연속하는 중복 요소가 아니기때문에 stack에 push한다.
*/
