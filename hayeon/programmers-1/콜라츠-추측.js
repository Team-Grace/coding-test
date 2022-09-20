function solution(num) {
  let result = 0;

  for (let i = 0; i <= 500; i++) {
    if (num !== 1) {
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    } else {
      return (result = i);
    }
  }
  return (result = -1);
}

/*
    처음 푼 풀이
    function solution(num) {
      let result = 0;
      for (let i = 1; i <= 500; i++) {
        if (num % 2 === 0) {
          num % 2;
        } else {
          num * 3 + 1;
        }
        result += i;
      }
      return result;
    }
    풀이 순서대로 짝수/홀수 일 때 나누어 썼는데 생각해보니 1이라는 결과값을 도출해야했음..
    그래서 for문 안 if문 조건을 짝홀이 아닌 1일 때와 1이 아닐때로 조건을 걸어서 풀면 되었던 것!
    먼저 1이 될 떄까지 for문을 계속 돌리고 결국 1이 되었을 때 반복횟수를 받아주면 됨.
    500번이상 반복시에는 -1 리턴하는 것이므로 for문 밖에 써주면 된다.
    */
