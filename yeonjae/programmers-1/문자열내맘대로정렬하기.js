function solution(strings, n) {

  strings.sort (function (a,b) {
    const firstVal = a[n];
    const secondVal = b[n];
        
    if (firstVal === secondVal) {
      return (a > b) - (a < b);
    } else {
      return (firstVal > secondVal) - (firstVal < secondVal);
    }
  });
  
  return strings;
}