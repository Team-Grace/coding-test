function solution(absolutes, signs) {
  let result = 0;

  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (result += absolutes[i]) : (result -= absolutes[i]);
  }

  return result;
}
/*
(풀이)
true면 양수니까 더해주고 false면 음수니까 빼줘야하기때문에
for문을 돌면서 result에 바로 계산을해주고
루프문이 끝나면 최종값 result를 리턴해준다! 
*/
