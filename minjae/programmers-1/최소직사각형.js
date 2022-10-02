function solution(sizes) {
  let [maxWidth, maxHeight] = [0, 0];

  return sizes.reduce((_, cur) => {
    const [width, height] = cur.sort((a, b) => b - a);

    maxWidth = Math.max(width, maxWidth);
    maxHeight = Math.max(height, maxHeight);

    return maxWidth * maxHeight;
  }, 0);
}

/**
 * (풀이)
 * 해당 풀이는 가로와 세로의 각 길이의 최대값을 구해서 넓이를 구하는게 아니고
 * sizes의 각 요소들을 내림차순으로 정렬 후, 거기서 maxWidth와 maxHeight 값을 도출해야한다.
 * 첫 번째 요소가 width, 두 번째 요소가 height라면, 순회할 때마다 maxWidth값과 현재의 width값중에 더 큰 값을 maxWidth 값에 할당한다. maxHeight도 비슷하게 진행한다.
 * 그리고 매 순회마다 maxWidth * maxHeight 값을 리턴해주면서 결국 원하는 결과를 도출해냈다.
 */
