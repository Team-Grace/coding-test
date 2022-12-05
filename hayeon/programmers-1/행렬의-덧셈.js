function solution(arr1, arr2) {
  let result = [[]];
  for (let i = 0; i < arr1.length; i++) {
    result[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      result[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return result;
}

/*
처음 풀이
function solution(arr1, arr2) {
  let result = [];
  let num = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(num);

    for (let j = 0; j < arr1[i].length; j++) {
      num.push(arr1[i][j] + arr2[i][j]);
    }
  }
  return result;
}
계속 나뉘지 않고 하나의 배열에 들어감... 아무리 고민을 해도 모르겠어서 구글링

function solution(arr1, arr2) {
    let result = [];

    for(let i = 0; i < arr1.length; i++){
        let sum = [];

        for(let j = 0; j < arr1[i].length; j++){
            sum.push(arr1[i][j] + arr2[i][j]);
        }
        result.push(sum);
    }
    return result;
}

바깥 for문에 let sum =[]; 을 설정하면 되었던것...

그리고 변수를 하나만 만들어서 푸는 방법도 존재했다!
바깥쪽 for문에 result[i] = []; 로 설정해주고 풀면 된다.

*/
