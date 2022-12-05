function solution(s) {
  var answer = "";
  if (s.length % 2 === 0) {
    answer = s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    answer = s[Math.floor(s.length / 2)];
  }
  return answer;
}

/* 풀이
    function solution(s) {
    const strCount = s.length;

    if(strCount % 2 === 0){ s.substr(i,2) }
    else{ s.substr(i,1) }

}

라고 혼자 풀었는데... 도통 감이 안잡혀서 구글링........
노트에 적었을 때 홀수는 s.substr(i, 2) 짝수는 s.substr(i, 1) 규칙을 찾았지만
도대체 앞에 i는 어떻게 설정 해야 하는걸까?? 라는 고민의 굴레에 빠짐..
내가 너무 직관적으로 보이는 것만 생각한 것 같음

검색하자마자 머리 탁 맞은듯이 얼얼해짐 난 바보였던 것
왜 문자열을 계속 메서드로 잘라서 받으려고 한 걸까..
[]로도 받을 수 있다는 걸 깨닳아버렸음!!!!


*/
