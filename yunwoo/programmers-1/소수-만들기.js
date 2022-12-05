//풀이 1

function solution(nums) {
  const numberOfAllCases = getCombinations(nums, 3).map((innerArr) =>
    innerArr.reduce((acc, cur) => acc + cur, 0)
  );
  let result = 0;

  numberOfAllCases.map((v) => {
    if (primeNumber(v)) result++;
  });

  return result;
}

const primeNumber = (x) => {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }

  return true;
};

const getCombinations = (arr, arrLength) => {
  const result = [];

  if (arrLength === 1) return arr.map((el) => [el]);

  arr.map((item, idx, thisArr) => {
    const sliceArr = thisArr.slice(idx + 1);
    const numbersCase = getCombinations(sliceArr, arrLength - 1);
    const combines = numbersCase.map((value) => [item, ...value]);

    result.push(...combines);
  });

  return result;
};

//풀이 2

function solution(nums) {
  let result = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sumNumber = nums[i] + nums[j] + nums[k];

        if (primeNumber(sumNumber)) result++;
      }
    }
  }

  return result;
}

const primeNumber = (x) => {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }

  return true;
};

/*
(풀이1)
처음에 조합 알고리즘이라는 글을 보고 이용해 봤는데 효율과 가독성 둘 다 별로인 것 같지만 푼게 아쉬워서 가져왔습니다ㅎㅎ..

getCombinations라는 순서가 상관없는 경우의 수를 구하는 재귀함수를 만들고 
각각의 경우의 수 배열을 reduce로 더한 후에 소수를 구하는 함수로 값들을 평가해준 후
true일 경우에만 result 값을 증가시켜준다.

(풀이2)
3중 for문을 이용해 각각의 초기값 변수를 가져와 +1 씩 증가 해줌으로써
nums배열의 3개의 값들을 더한 sumNumber 값을 구할 수 있다. 이때 첫번째 for문에서 조건식 -2를 해줄 수 있는데
이유는 앞의 2개의 값까지 이미 계산을 하기 때문.
이후에 소수를 구하는 함수를 가져와 x의 제곱근 까지만 계산을 해서 나누어 떨어질 경우 소수가 아니므로 false
소수일 경우 true를 반환하고 true일 경우 result의 값을 증감시켜 소수의 갯수를 구한다.
*/
