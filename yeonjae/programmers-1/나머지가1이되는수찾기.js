function solution(n) {
  let arr = [];
   
  for (let i = 1; i < n; i++) {
    if (n % i === 1)
      arr.push(i);
    }
    
  return Math.min(...arr);
}