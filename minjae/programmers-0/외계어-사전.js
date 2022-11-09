// 백트랙킹 참고 (https://iseunghan.tistory.com/241)
function solution(spell, dic) {
  const visited = Array(spell.length + 1).fill(0);
  const spells = [];
  const temp = [];

  recursion(1); // 재귀 첫 호출

  for (const spell of spells) {
    if (dic.includes(spell)) return 1;
  }

  return 2;

  function recursion(idx) {
    if (idx === spell.length + 1) {
      const str = temp.map((idx) => spell[idx - 1]).join("");
      return spells.push(str);
    }

    for (let i = 1; i <= spell.length; i++) {
      if (!visited[i]) {
        visited[i] = 1;
        temp.push(i);

        recursion(idx + 1);

        //모든 재귀가 끝나면
        temp.pop();
        visited[i] = 0;
      }
    }
  }
}

// 정렬을 통한 문제
function solution(spell, dic) {
  return dic.find((dic) => getSortStr(dic) === getSortStr(spell.join("")))
    ? 1
    : 2;
}

function getSortStr(str) {
  return [...str].sort().join("");
}
