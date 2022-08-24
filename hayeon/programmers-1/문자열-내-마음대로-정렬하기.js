function solution(strings, n) {
  strings.sort(function (a, b) {
    let first = a[n];
    let second = b[n];
    if (first === second) {
      return (a > b) - (b > a);
    } else {
      return (first > second) - (second > first);
    }
  });

  return strings;
}

/*
풀이..

function solution(strings, n) {
  for (let i = 0; i < strings.length; i++) {
    let arr = [];
    arr += strings[n][i].split();
    const result = arr.sort();
    return result;
  }
}

1. arr 배열을 담을 변수를 만들고
2. 배열에 strings[n][i] 로 문자열을 반환받음.. 그리고 이것을 배열에 담아주기위해
split()이용해서 배열을 만들어줬다. 근데 더해주려고 복합대입연산자를 이용했는데..
생각해보니까 split()으로 배열이 만들어 지는데 또 빈 배열에 배열을 추가하는건가..?
뭔가 여기서부터 잘못되었다고 생각이 들었음..
그리고 만든 배열로 sort() 해서 오름차순 정리를 해줬는데
생각해보니까 원래 배열을 오름차순 해줘야 되는데.... 아무리 고민해도 모르겠어서 구글링..

다시 구글링해서 풀었을 때,
1. true면 1을 반환, false면 0 을 반환
(first > second) - (second > first) 하면
앞의 조건이 true이면 (1 - 0 = 1) 1, 뒤 조건이 맞으면 (0 - 1 = -1 이므로) -1 반환
결국 맞으면 1, 틀리면 -1 반환..
sort()에 대해서 자세히 공부하고 정리해야 할 것 같다.

(a>b)-(b>a)가 1 이게 되면 a 가 b 보다 앞에
(a>b)-(b>a)가 -1이면 b가 a보다 앞에 위치 하는 개념인 것 같다.


다른사람 풀이
function solution(strings, n) {
  return strings.sort((a, b) => {
    // 인덱스 n번째 글자를 기준으로 오름차순 정렬
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    // 인덱스 n번째 글자가 같으면 사전순 정렬
    else return a > b ? 1 : -1;
  });
}


*/
