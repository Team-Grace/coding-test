function solution(lottos, win_nums) {
  const result = [];

  result.push(getLottoRanking(win_nums, lottos, "highRank"));
  result.push(getLottoRanking(win_nums, lottos));

  return result;
}

function getLottoRanking(winNumber, myNumber, rank) {
  const ranking = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
  let matchedNumber = 0;

  for (el of myNumber) {
    const MatchedIdx = winNumber.indexOf(el);

    if (MatchedIdx !== -1) matchedNumber++;
    if (rank === "highRank" && el === 0) {
      matchedNumber++;
    }
  }

  return ranking[matchedNumber];
}

/*
(풀이)
처음에 통과는 했지만 반복구문을 리팩토링 하고싶어서 고민하다 완성한 코드.

함수를 분리해서 ranking을 반환하는 함수를 만들었다.
함수는 내 번호와 당첨번호가 일치하면 matchedNumber 변수를 증가 시켜주고
만약 3번째 인자로 'highRank' 이라는 문자열이 들어온다면 요소가 0 일 경우에도 증가시켜서
총 2번의 함수 호출로 구한 최고등수와 최저등수를 배열에 담아 반환한다.

아래는 리팩토링 전 코드

function solution(lottos, win_nums) {
    const result = [];
    const highRank = result.push(getLottoRanking(win_nums,lottos,'highRank'))
    const lowRank = result.push(getLottoRanking(win_nums,lottos))

    return result;
}

function getLottoRanking (winNumber,myNumber,rank) {
    const ranking = {6:1,5:2,4:3,3:4,2:5,1:6,0:6}
    let matchedNumber = 0;

    if(rank === 'highRank') {
        for(el of myNumber) {
            const myIdx = winNumber.indexOf(el)

            if(el === 0) matchedNumber++;
            if(myIdx !== -1) matchedNumber++;
        }
    } else {
        for(el of myNumber) {
            const myIdx = winNumber.indexOf(el)

            if(myIdx !== -1) matchedNumber++;
        }
    }

    return ranking[matchedNumber]
}

*/
