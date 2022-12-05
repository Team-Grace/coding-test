function solution(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let sameStr = 1;
    let diffStr = 0;

    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        sameStr++;
      } else {
        diffStr++;
      }

      if (sameStr === diffStr) {
        result++;
        i = j;
        break;
      }

      if (j + 1 === s.length) {
        i = j;
      }
    }

    if (sameStr !== diffStr && i + 1 === s.length) {
      result++;
    }
  }
  return result;
}

/**
 * 풀이
 *
   //     const arr = s.split("");
  //     const a = [];

  //     for(let i = 0; i < s.length; i++){
  //         if(s[i] !== s[i + 1]){
  //             a.push(arr.shift());
  //         }
  //     }
  //     return a;

  처음에는 split과 앞문자를 잘라서 넣으려고 했는데 마음처럼 쉽게 되지 않았다.
  이럴때는 문자를 이용하기보다 숫자를 카운트하는 변수를 만들어서 푸는게 더 현명했다!
  if문이 계속 반복되서 잘 쓴게 맞는건가 고민이 되긴한다. 더 좋은방법이 있을것 같다.
 */
