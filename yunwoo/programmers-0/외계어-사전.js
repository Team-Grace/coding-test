function solution(spell, dic) {
  const sortedSpell = spell.sort().join("");

  for (let i = 0; i < dic.length; i++) {
    const sortedDic = dic[i].split("").sort().join("");

    if (sortedDic === sortedSpell) return 1;
  }

  return 2;
}

/*
(풀이)
sort 메서드를 이용해 오름차순으로 문자열을 정렬 해주고
dic 배열에 요소를 똑같이 정렬해준뒤 같은 뒤 비교해서 같으면 1
아니면 2를 리턴
*/
