function solution(emergency) {
  const emergencyArr = [...emergency].sort((a, b) => b - a);

  return emergency.map((item) => emergencyArr.indexOf(item) + 1);
}
