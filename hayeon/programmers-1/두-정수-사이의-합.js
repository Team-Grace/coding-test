function solution(a, b) {
  const maxNumber = Math.max(a, b);
  const minNumber = Math.min(a, b);
  let sum = 0;

  for (let i = minNumber; i <= maxNumber; i++) {
    sum += i;
  }
  return sum;
}

/*
풀이

처음에는 풀이를 if - else 를 이용해서 풀어보려고 했다.
if(a === b){return a}
else{ return a + b + ...? }

하지만 위와 같이 그 사이의 합을 구할 수가 없어서 어떻게 해야하나 고민을 많이했다.
a 부터 시작해서 a+1, a+2, a+3, ..., b 이므로 가운데 값을 구해야 하는데
1씩 증가되기 때문에 for 문을 사용해야겠다고 생각이 들었다.

배열의 값을 더해주는 것이기 때문에
예시)
const arr = [1, 2, 3, 4];
let sum = 0;

for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
return sum;

인데 예시와 같이 배열을 만들고 싶어도 가운데 값을 모르기 때문에
위의 풀이에서 살짝 변형을 해서 max, min의 값을 구하고 for문을 통해 값을 반환받을 수 있었다!

*/
