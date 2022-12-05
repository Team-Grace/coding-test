function solution(numbers) {
  const emptyArray = [];
  const numCount = numbers.length;
  for (let i = 0; i < numCount; i++) {
    for (let j = i + 1; j < numCount; j++) {
      emptyArray.push(numbers[i] + numbers[j]);
    }
  }
  const sortedArray = emptyArray.sort((a, b) => a - b);
  const result = sortedArray.filter(
    (value, idx) => sortedArray.indexOf(value) === idx
  );

  return result;
}

/*
(풀이)
이번 풀이는 결국 다른사람의 풀이를 보고 답을 찾았다.
이중for문을 이용해야 한다는 것은 눈치를 챘지만 답이 자꾸 엉뚱하게 나왔는데 그 이유를 찾지못했다.

- 내가 한 풀이
function solution(numbers) {
    const emptyArray = [];
    const numCount = numbers.length
    for(let i=0; i<numCount; i++){
        for(let j=1; j<numCount; j++){
           emptyArray.push(numbers[i] + numbers[j]);
        }
    }
    const sortedArray = emptyArray.sort((a, b) => a - b);
    const result = sortedArray.filter((value, idx) => sortedArray.indexOf(value) === idx);

    정렬과 중복요소 제거는 어느정도 알고 있었기도 했고 구글링하면 나오지만 이 부분을 벗어나지 못했다.
    입력값이 [2, 1, 3, 4, 1] 일 경우 result는 [2,3,4,5,6,7,8] 에서는 4가 두번 더해진 8이 문제였고
    입력값이 [5, 0, 2, 7] 일 경우 result는 [0,2,4,5,7,9,12,14] 를 반환했고 최대값 2개 더해진 14 그리고
    0이 더해져 요소로 남는 부분이 왜 그런지 전혀 이해하지 못하고 결국 풀이를 확인했다.
}
    for(let i=0; i<numCount; i++){
        for(let j=1; j<numCount; j++){
           emptyArray.push(numbers[i] + numbers[j]);
        }
    }

    문제는 2중 for문의 j 였고 나는 i가 1이 되면 j++ 로 인해 j가 2 그리고 그다음은 3 이렇게 올라갈거라 생각했었는데
    지금 생각하면 왜 그렇게 생각했는지 모르겠다.. j는 i의 반복문 1번을 돌때 증가했다가 다음 i의 반복문이 돌때는 1로 돌아
    온다는 걸 알았고 j = i + 1 ; 로 고치고 나서 성공했다. 2중 반복문의 j 부분을 제대로 파악하지 못한게 아쉽다.

    const result = sortedArray.filter((value, idx) => sortedArray.indexOf(value) === idx); 이 중복 제거를
    const result = [...new Set(sortedArray)] <- Set과 스프레드 연산자를 이용해 배열에 전개할 수 있다는 것도 알았다.

    찾아보니 Set은 집합의 개념이고 O(1)에 시간복잡도를 지니니 O(n)의 시간복잡도인 filter 보다는 Set을 이용하는게 좋은거 같다.

*/
