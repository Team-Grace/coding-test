function solution(phone_number) {
  const starQuantity = phone_number.length - 4;

  return (
    new Array(starQuantity).fill("*").join("") +
    phone_number.substring(starQuantity)
  );
}

/* 
(풀이)
처음에는 new RegExp 로 만든 정규표현식과 replaceAll 을 이용해 풀이하려다 복잡해져서 이게 최선인가
고민해봤는데 배열을 이용하는걸로 변경.
Array.from({ length: starQuantity }, (v) => (v = "*"))
.join("")
.concat(phone_number.substring(starQuantity)) 으로 테스트 성공, 
테스트 평균시간이 2.xx ms 대 였고 시간복잡도 효율을 고민해봤을 때 Array.from() 보다는 new Array.fill 이
concat() 메서드 보다는 문자열의 더하기 였기에 + 연산자로 변경 테스트 평균시간이 0.0X ms 대로 줄었다.
*/
