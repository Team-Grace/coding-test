function solution(left, right) {
  let result = 0;
  const numArr = new Array(right - left + 1).fill().map((_, i) => left + i);

  for (let element of numArr) {
    let i = 1;
    const divisorArr = [];

    while (i <= element) {
      if (element % i === 0) {
        divisorArr.push(i);
      }
      i++;
    }

    !(divisorArr.length % 2) ? (result += element) : (result -= element);
  }

  return result;
}

function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    const divisorArr = [];

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisorArr.push(j);
      }
    }

    !(divisorArr.length % 2) ? (result += i) : (result -= i);
  }
  return result;
}

/* 

(풀이1)
배열을 생성해서 약수를 구해야하는 값들을 넣어주고 for...of 문으로 요소를 하나씩 돌며
while 문을 이용해 1부터 element값까지 나머지가 0이 되는 i값을 divisorArr배열에 추가해준 뒤
divisorArr.length 가 짝수면 reuslt에 element값을 더하고 홀수면 element값을 빼준다.

(풀이2)
위 풀이와 방식은 비슷하지만 num배열을 만들지 않고 지역변수인 divisorArr만을 이용해
2중 for문 형식으로 풀어냈다. 2중 for문을 이용한 방식이 map등 배열을 만들지 않기에 더 효율적인 것 같다.
*/
