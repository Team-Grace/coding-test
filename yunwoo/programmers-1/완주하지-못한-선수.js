function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i <= participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

/*
(풀이)
sort 메서드로 똑같이 정렬시켜주고 completion의 길이는 participant의 길이보다 1 작으므로
반복문을 돌려 두개의 요소가 같지 않을 때 그 요소를 리턴해주면 된다.

*/
