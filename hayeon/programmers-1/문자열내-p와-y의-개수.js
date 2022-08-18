function solution(s) {
  let str = s.toUpperCase();
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (str[i] === "P") count++;
    else if (str[i] == "Y") count--;
  }
  return count === 0 ? true : false;
}

/*
내가 푼 풀이.....
대소문자 구분 없게 하기 위해서 //gi를 써서 넣어줬는데 ..
if문 까지 됐지만 p, y가 없을 때는 도대체 어떻게 해야되지??? 라는 고민을 하다가
노트에 적어도 아무리 생각이 안나서.. 구글의 도움을 받았음

구글링 해보니 알파벳의 일부는 소문자로 변환 할 때 왕복? 할 수 없기 때문에 대문자 방법이 선호된다고 함
그래서 toUppercase()로 변환 후, P를 찾으면 +1, Y를 찾으면 -1을 해 결과값이 0이면 true, 아니면 false
이 때 p도 y도 없다면 count값은 계속 0 이므로 항상 true 반환!!

** 찾다보니 한 줄로도 가능한 코드 발견.. **

function solution(s){
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}


function solution(s) {
  let yCount = s.match(/y/gi).length;
  let pCount = s.match(/p/gi).length;

  if (yCount == pCount) {
    true;
  } else {
    false;
  }
}

*/
