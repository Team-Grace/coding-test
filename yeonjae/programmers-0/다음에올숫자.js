function solution(common) {
  const prevDiff = common[1] - common[0];
  const nextDiff = common[2] - common[1];
  const proportion = common[1] / common[0];
  const lastItem = common[common.length - 1];

  return prevDiff === nextDiff ? lastItem + prevDiff : lastItem * proportion;
}
