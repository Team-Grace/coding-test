function solution(numbers) {
  const newNum = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      newNum.push(numbers[i] + numbers[j]);
    }
  }
  const arrNum = [...new Set(newNum)];
  let result = arrNum.sort((a, b) => a - b);
  return result;
}

/*
풀이

function solution(numbers) {
    for(let i = 0; i < 100; i++){
        const randomNum1 = numbers[i];
        const randomNum2 = numbers[i];

        let newNum = [];
        newNum += (randomNum1 + randomNum2);

        const arrNum = newNum.split();
        const result = arrNum.sort();
        return result;
    }
}

처음 풀었던 풀이인데, 여기서 무작위로 뽑은 수를 모두 numbers[i]로 설정하면,
같은 위치에 있는 것이 뽑힐 수도 있기 때문에 잘못되었음을 인지
그래서 for문을 두번 돌리고 다르게 넣어줬는데 실패함!
생각해보니 동일한 수가 들어갈 수 있다는 것을 생각하지 못했음
또, 오름차순으로 배열을 만들어 주는 것이 아직은 어려운 것 같다...

그래서 구글링을 했더니 new Set()으로 동일한 수를 없애고 배열로 만들어주는 것을 발견했다..
그리고 오름차순으로 배열을 정리해주려면 sort((a, b) => a - b); 을 넣어줘야 한다는 것을 알게 되었다
이 문제랑 어제 문제는 무조건 다시 한번 더 해봐야 할 것 같다.


*/
