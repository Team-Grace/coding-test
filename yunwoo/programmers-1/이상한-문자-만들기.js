function solution(s) {
  const strArr = s.split(" ");
  let result = "";

  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      result += !(j % 2)
        ? strArr[i][j].toUpperCase()
        : strArr[i][j].toLowerCase();
    }

    if (i < strArr.length - 1) {
      result += " ";
    }
  }

  return result;
}

/*
(풀이)
히든케이스 해결에 정말 많은 시간을 버렸다..
2중 for문으로 split으로 나눠준 strArr 배열요소의 개수만큼 돌려주고
내부 for문에서 요소의 문자열 개수만큼 반복문을 돌려준다. 이때 인덱스의 번호가 짝수면 대문자
홀수면 소문자를 result변수에 대입해주고 한 단어의 내부for문이 끝날때마다 공백을 추가해준다.
다중 map으로 조금 더 가독성 좋게 구현이 가능할거 같은데.. 조만간 다시 해보자.

삽질의 흔적들

function solution(s) {
    const result =s.split('').map((v,i) => !(i % 2) ? v.toUpperCase() : v).join('')
    return result
}
function solution(s) {
    let str = s.split(' ');
    for(let i=0; i <=str.length-1; i++){
        for(let j=0; j<= str[i].length-1;j++){
            if(j % 2 === 0) result.push(str[i][j].toUpperCase())
            else {
                result.push(str[i][j]);
            }
        }
        if(!(i === str.length-1))result.push(' ')
    }
    return result.join('')
}

*/
