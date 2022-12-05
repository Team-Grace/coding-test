function solution(n) {
  let town3X = 0;
  let count = 0;

  while (count < n) {
    town3X++;
    if (!String(town3X).includes("3") && town3X % 3 !== 0) count += 1;
  }

  return town3X;
}
/*
(풀이)
마을3x의 숫자를 넣을 변수와 일반 10진법을 카운트할 변수 두개를 준비하고
while문으로 count가 n과 동일해 질때까지 진행하는데
count는 3의 배수가 아니거나 숫자에 3이 없을 경우에만 증가하고 while문이 진행되는동안
마을3x의 숫자를 계속 늘려준다.


//////////////////////

실패 풀이
3의 배수와 3이 나올때마다 1씩 증가 해주면 될 것 같았는데 실패했다.
function solution(n) {
  let town3X = 0;
  let i = 0;
  while(i <= n){
      i++;
      town3X++;
      if(town3X % 3 === 0){
          town3X++;
      }

      if(String(i).includes('3')){
          console.log(String(i).includes('3'), i)
          town3X++;
      }
  }
  return town3X
}
*/
