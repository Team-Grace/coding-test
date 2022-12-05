function solution(s) {
  return Number(s);
}

/*
풀이

나는 왜 어렵게 생각한 것일까...

function solution(s) {
    if(!s.includes('-')){
        s = Math.floor(Math.random() * 10000);
        return Number(s);
    } else {
        s = Math.floor(Math.random() * s.length);
        return Number(s);
    }
}

부호를 포함한지 안한지 따라서 이것저것 해보려고했는데
어처피 "-1234"를 Number("-1234")하면 -1234 인데..
계속 생각하다가 굳이 여러가지를 생각해야할까? 하고 그냥 return Number(s);
했는데 성공해서 당황했다..

구글링을 해보니까

function solution(s){
  return s/1
  }

function solution(s){
  return  +s;
}

등 문자열을 숫자 연산자와 함께 사용하면 자바스크립트가 계산을 하기위해 자동으로 문자열을
숫자로 바꿔주기 때문에 같은 결과값을 도출한다!



*/
