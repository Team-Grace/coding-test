function solution(s) {
  const sum = s.split(" ");

  while (sum.includes("Z")) {
    const zIdx = sum.findIndex((el) => el === "Z");
    sum.splice(zIdx - 1, 2);
    console.log(sum);
  }

  return sum.reduce((acc, cur) => acc + parseInt(cur), 0);
}

/*
(풀이)
공백을 기준으로 요소를 나눠주고 배열안에 'Z'가 있을경우 원본배열(sum)에서 
이전 요소 + 현재 요소를 제거해주는 while문을 돌려준 후 number타입으로 변경하여 남은 요소를 모두 더해준 뒤 반환해준다.

for문으로 시도하는데 계속 원본배열을 건드리니 index가 엉켜서 고생했다..
*/
