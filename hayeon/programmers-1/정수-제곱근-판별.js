function solution(n) {
  const int = Math.floor(Math.sqrt(n));
  const doubleNum = Math.pow(int, 2);

  if (n === doubleNum) {
    return Math.pow(int + 1, 2);
  } else {
    return -1;
  }
}

/*
처음 풀이!
function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (n === Math.pow(i, 2)) {
      return Math.pow(i + 1, 2);
    } else {
      return -1;
    }
  }
}
처음에는 단순히 n을 가지고 제곱근 했을 때 값과 같으면 리턴해주자라는 생각으로 for문을 돌림
근데 for문을 처음 만들 때부터 의아함 (i의 범위는 어디까지?)
계속 else 안에 들어간 -1 만 반환함
근데 else 를 삭제하면 또 if문 안에 있는 것 반환 잘 됨..
곰곰히 생각해보니 n이 x의 제곱값인데.. 그러면 x를 구하려면? x는 n의 제곱근이므로
Math.sqrt()를 사용해서 정의해주는 것.
이때, Math.sqrt(n)이 예를들어 Math.sqrt(2)일때, n은 2의 제곱근이므로 소수가 나올 것
그러므로 Math.floor()을 통해 내림해준다. (정수반환)
그리고 두번째로 이 정수의 제곱값이 n 이므로 변수로 설정(doubleNum)해주고
if 문을 돌려서 n이 doubleNum과 같을 때 값을 리턴해주면 된다!

n = 3, int = 1
Math.floor(Math.sqrt(3)) -> 1
n !== int 따라서, -1 리턴
*/
