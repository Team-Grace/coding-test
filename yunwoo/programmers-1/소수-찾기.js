const primeNumber = (x) => {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
};

function solution(n) {
  let result = 0;

  for (let i = 2; i <= n; i++) {
    if (primeNumber(i)) result++;
  }
  return result;
}
/*
(풀이)
이번에도 혼자 풀기 실패. sqrt가 제곱근이고 루트를 씌운다는건 알겠는데 흠.. 어렵다..

실패풀이
function solution(n) {
  let result = [];
  const primeNumber = (x) => {
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false;
    }
    return true;
  };
  for (let i = 2; i <= n; i++) {
    if (primeNumber(i)) result += i;
  }
  return result.length;
}
이것저것 참고하며 이렇게 풀이작성했지만 효율성에서 실패.
결국 다른 답지를 보고 result를 카운트하는 식으로 변경했다.

함수를 이용해서 매개변수 x를 받아 for문을 돌려주고 x가 i의 배수여서 나머지가 0 이면
false 리턴 아닐경우 true를 리턴하게 해주고 if문을 이용해서 함수가 true일때만 result를 올려줘서
개수를 맞춰줬다.

이해가 안가는 부분이 많은데 primeNumber함수에서 for문을 돌릴 때
조건식에서 x의 루트가 i보다 클 경우 for문이 돌아가는데

1.4142135623730951  루트2일때
1.7320508075688772  루트3일때
2.23606797749979    루트5일때
2.6457513110645907  루트7일때

이렇게 되면 i보다 작으니까 for문이 안돌아가야 하는거 아닌가..?
너무헷갈린다..

*/