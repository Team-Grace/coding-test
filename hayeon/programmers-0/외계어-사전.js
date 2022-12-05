function solution(spell, dic) {
  const foundSpell = dic.find((word) =>
    word.split("").sort().join("").includes(spell.sort().join(""))
  );

  return foundSpell ? 1 : 2;
}

/**
 * 최근에 풀었던 문제중에 제일 생각하기 무난했던? 문제같다.
 * includes를 사용하려고 여러가지 시도를 해봤는데 한번에 잘 안되어서
 * 다른 분의 코드를 참고해 find를 이용해서 더 보완했다!
 */
