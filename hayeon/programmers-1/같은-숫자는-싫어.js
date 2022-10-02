function solution1(arr) {
  const result = [];

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] !== arr[i + 1]) result.push(arr[i]);
  }
  return result;
}

function solution2(arr) {
  return arr.filter((x, idx) => x !== arr[idx + 1]);
}

/**
 * 풀이
 * 솔루션1에서 arr[i] !== arr[i+1] 인데..
 * arr[5]와 arr[6]은 값이 1로 같은데도 배열에 들어간다.
 * 내가 i의 범위를 그냥 i < arr.length; 를 했을 때도 테스트가 통과하는데 왜일까,,,
 * i <= arr.length; 를 했을 때는 a[6]과 a[7]을 비교하기 때문에 1과 undefined이므로
 * result 배열에 추가할 수 있다. 근데 length 길이 미만일 때는 왜 되는거지..?
 *
 * 솔루션2는 filter 함수를 통해 풀었다. 한 줄로 더 깔끔하게 구현된다!
 */
