function solution(a, b) {
  const gcdNumber = gcd(a, b);
  const irreducibleFraction = b / gcdNumber;
  const primeFactor = [...primeFactorization(irreducibleFraction)];
  const denominatorArray = primeFactor.filter((v) => v !== 2 && v !== 5);

  return denominatorArray.length ? 2 : 1;
}

function gcd(num1, num2) {
  const remainder = num1 % num2;

  return num2 === 0 ? num1 : gcd(num2, remainder);
}

const primeFactorization = (num) => {
  const set = new Set();

  while (num % 2 === 0) {
    num /= 2;
    set.add(2);
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0) {
      set.add(i);
      num /= i;
    }
  }

  if (num > 2) set.add(num);

  return set;
};

/*
(풀이)
최대공약수를 구하고 분모 b를 공약수로 나눠준다.
나눠준 값을 소인수분해 해서 배열로 변환해주고 filter로 값이 2 나 5가 아닐 경우의 배열을 만들고
배열의 length가 없을경우 유한소수 1 있을경우 무한소수 2로 처리해 반환한다.

(실패 풀이)

최대공약수와 소인수를 구하는 함수는 동일하게 적용했을 때 for문으로 접근 시 실패했는데
왜 인지 모르겠습니다..

function solution(a, b) {
  const gcdNumber = gcd(a, b);
  const irreducibleFraction = gcdNumber === 1 ? b : b / gcdNumber;
  const primeFactor = [...primeFactorization(irreducibleFraction)];
  let result = 0;
    
  if (a === b) return 1;
    
  for (let i = 0; i < primeFactor.length; i++) {
    if (primeFactor[i] === 2 || primeFactor[i] === 5) result = 1;
    else result = 2;
  }
    
  return result;
}

*/
