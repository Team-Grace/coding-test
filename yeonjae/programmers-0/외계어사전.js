function solution(spell, dic) {
  const strSpell = spell.sort().join("");
  const strDictionary = dic.map((diction) => diction.split("").sort().join(""));

  return strDictionary.includes(strSpell) ? 1 : 2;
}
