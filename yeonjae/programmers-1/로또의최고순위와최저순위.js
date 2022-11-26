function solution(lottos, win_nums) {
  const answer = [];
  let minRank = 0;
  let maxRank = 0;

  lottos.forEach((lotto) => {
    if (win_nums.includes(lotto)) {
      minRank++;
      maxRank++;
    }
    if (lotto === 0) {
      maxRank++;
    }
  });

  checkGrade(maxRank);
  checkGrade(minRank);

  return answer;

  function checkGrade(num) {
    switch (num) {
      case 2:
        answer.push(5);
        break;
      case 3:
        answer.push(4);
        break;
      case 4:
        answer.push(3);
        break;
      case 5:
        answer.push(2);
        break;
      case 6:
        answer.push(1);
        break;
      default:
        answer.push(6);
    }
  }
}

//함수 checkGrade는 1 ~ 6순위에 해당하는 당첨내용이다. 1인경우는 1순위로 6개 다 맞은경우이기때문에 default로 6을 넣어주었다.

//당첨번호에 먼저 lottos의 번호가 있는지 체크를 해주고, 있는경우 minRank,maxRank을 모두 하나씩 올려준다. 0은 알아볼 수 없는 숫자이기때문에 0인경우 최고순위는 맞다고 판단하고, 최저순위의경우 틀렸다 판단하여 maxRank만 하나 올려준다.  그렇게 나온 minRank와 maxRank는 checkGrade함수의 인자로 넣어주어서 1~6순위 중 어디에 해당하는지 answer에 push를해준다. 그렇게되면 최저순위와 최고순위가 담긴 배열을 리턴해주면된다.
