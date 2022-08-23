function solution(n) {
  for (i = 3; i <= n; i++) {
    if (n % i === 1) return i;
  }
}

/*
풀이

function solution(n) {
  for (i = 3; i <= n; i++) {
    n % i === 1;
  }
  return i;
}

처음에 이렇게 풀었는데 값이 계속 n 보다 1 이 크게 나옴..
그래서 뭘까 하고 생각을 해봤지만 모르겠어서 구글링..
근데 if(n % i ===1) return i;
를 하면 되었던것..
if 문을 넣고 안넣고의 차이가 뭘까...
if 문을 안넣고 그냥 내가 푼 것 처럼 풀면 i 값이 1 증가해서 안되는 것인지..

*/
