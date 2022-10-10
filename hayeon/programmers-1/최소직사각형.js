function solution1(sizes) {
  const newArr = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]));

  const w = [];
  const h = [];

  for (let i = 0; i < sizes.length; i++) {
    w.push(newArr[i][0]);
    h.push(newArr[i][1]);
  }

  return Math.max(...w) * Math.max(...h);
}

function solution2(sizes) {
  const w = [];
  const h = [];

  for (let i = 0; i < sizes.length; i++) {
    const max = Math.max(sizes[i][0], sizes[i][1]);
    const min = Math.min(sizes[i][0], sizes[i][1]);

    w.push(max);
    h.push(min);
  }
  return Math.max(...w) * Math.max(...h);
}

/**
 * 풀이
 * 문제는 이해했는데 푸는 과정에서 많이 버벅 거렸다.
 *
 function solution(sizes) {
    const newArr = [];

    for(let i = 0; i < sizes.legnth; i++){
        const arr = [];

        for(let j = 0; j < sizes[i].length; j++){
            if(sizes[i][j] > sizes[i][j+1]){
                arr.push(sizes[i][j], sizes[i][j+1]);
            }
            else { arr.push(sizes[i][j+1], sizes[i][j]); }
        }
        newArr.push(arr);
    }
    return newArr; //빈값이 리턴됨
}

처음엔 이렇게 풀었는데.. 어처피 가로 * 세로이므로(어처피 배열 안의 값은 2개뿐이기 때문에)
이중for문을 굳이 쓸 필요는 없었던 것 같다.
굳이 배열 전체를 다 담아서 다시 넣을 필요가 없고 가로와 세로 배열을 새로 만들어서
각각의 배열에 값을 넣어주는 것이 더 간편했다.
그리고 for문을 한 번 더 돌려서 인덱스값 0, 1 만 비교해주면 됐던 것..!!
두번째 풀이는 굳이 map 함수를 쓸 필요가 없어서 더 간단한 것 같다!
 */
