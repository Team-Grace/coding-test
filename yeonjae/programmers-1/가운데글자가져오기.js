function solution(s) {
  const AverageIdx = Math.floor(s.length / 2);
      
  if (s.length % 2 === 0) {
    return s[AverageIdx - 1] + s[AverageIdx]
  }
  else {
    return s[AverageIdx]
  }    
  
}
  