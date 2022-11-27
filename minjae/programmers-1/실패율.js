function solution(N, stages) {
  const rates = [];
  let stagesLength = stages.length;

  for (let i = 1; i <= N; i++) {
    const unclearCounts = stages.filter((stage) => stage === i).length;
    const rate = unclearCounts / stagesLength;

    rates.push([i, rate]);
    stagesLength -= unclearCounts;
  }

  return rates
    .sort((a, b) => b[1] - a[1] || a[0] - b[0])
    .map((rate) => rate[0]);
}
