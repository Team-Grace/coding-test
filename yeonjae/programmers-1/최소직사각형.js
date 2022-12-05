function solution(sizes) {
  const answer = [];

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      answer.push(sizes[i].reverse());
    } else {
      answer.push(sizes[i]);
    }
  }

  const width = [];
  const height = [];

  for (let i = 0; i < answer.length; i++) {
    width.push(answer[i][0]);
    height.push(answer[i][1]);
  }
  const sortWidth = width.sort((a, b) => b - a);
  const sortHeight = height.sort((a, b) => b - a);

  return sortWidth[0] * sortHeight[0];
}

/*
(풀이)
먼저 배열안에 있는 명함의가로, 세로길이를 정렬해주었다.
정렬헤준 answer을 가지고 width와 height배열을 만든 후, 배열을 내림차순을 해 준 후에 
가장 큰 가로길이와 가장큰 세로길이를 곱해서 리턴해주었다. 
*/
