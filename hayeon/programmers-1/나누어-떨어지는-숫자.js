function solution(arr, divisor) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      newArr.push(arr[i]);
      newArr.sort((a, b) => a - b);
    }
  }
  if (newArr.length === 0) {
    newArr.push(-1);
  }
  return newArr;
}

/*
풀이

처음에 아무런 생각 안하고 newArr.sort()만 했을 때, 첫번째 예시는 통과되지 못했다.
sort()에 대해 다시 공부했을 때 [5, 10] 이 자꾸 [10, 5] 가 나왔던 이유는
1이 5보다 작기 때문이었다! 그래서 단순히 arr.sort()가 아닌
arr.sort((a,b)=>a-b);를 해줬어야 했던 것이다! (이제 이해가 잘 됨..)

그리고 마지막 -1 을 리턴하는 것은 for문 안에 단순히 else{}를 가지고 처리해버리면
newArr = [-1, -1, -1]이 나오기 때문에 잘못되었다고 생각했다.
계속 나누어떨어지지 않는 수를 가지고 조건을 만드려하니 절대 되지 않았다.

구글링해보니 단순히 newArr.length 가 0 이면 되었던 것...
나름 스스로 혼자 많이 풀어서 뿌듯했다!!

*/
