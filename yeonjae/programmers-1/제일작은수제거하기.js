function solution(arr) {
  const minVal = Math.min(...arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1) return [-1];
    else if (arr[i] === minVal) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

/*
(풀이)
배열에서 Marh.min을통해 최솟값을 구하고 splice로 최솟값만 빼준 배열을 리턴하고,
배열의길이가 1인경우에는 [-1]을 리턴해준다. 
*/
