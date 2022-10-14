function solution(emergency) {
  const sortedEmergency = [...emergency].sort((a, b) => b - a);

  return emergency.map((el) => sortedEmergency.indexOf(el) + 1);
}
