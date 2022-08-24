function solution(numbers) {
  const set = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }
  return Array.from(set).sort((a, b) => a - b);
}

/**
 * (풀이)
 * 해당 문제는 서로 다른 인덱스에 잇는 두개의 수를 뽑아 더해서 나올 수 있는 값을 모두 구해야된다. 따라서 나 같은 경우 2중 for문을 통해 모든 경우의 수를 뽑아냈다.
 * 그리고 여기서 중복된 값이 나올 수 있는데, 중복된 값은 Set 자료 구조를 통해서 요소들의 유일한 값을 보장한다.
 * 하지만 요구사항에보면 오름차순 정렬이 필요하기 때문에 Set 자료구조를 Array.from을 통해서 배열로 변환시켜주고, 이를 정렬한다.
 */
