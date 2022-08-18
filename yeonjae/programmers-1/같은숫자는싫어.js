function solution(arr) {
  const resultArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[i+1]) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr
}

/*
(풀이)
배열의 중복값을 제거해주기위해, 처음에는 set함수를 생각했지만
set은 전체배열에서 중복값을 제거해준다는 것을 깨닫고, 
이문제와 맞지 않다고 생각

따라서 배열 하나하나를 돌며 배열 앞,뒤의 요소를 비교해 다른경우에만
새로운 배열에 push를 통해 집어넣어줌.
*/