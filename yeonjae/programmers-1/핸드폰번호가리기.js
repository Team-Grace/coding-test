function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

/*
(풀이)
폰 번호길이에서 -4를 한 숫자만큼 *을 넣어주고 (폰번호길이가 일정하기 않기때문에) 
slice를 이용해 맨뒷번호 4글자만 *이아닌 숫자를 리턴해준다! 
*/
