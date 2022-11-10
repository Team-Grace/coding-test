// 반복문
function solution(numbers) {
  const numberMappingObj = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  let result = "";
  let tempStr = "";

  for (let i = 0; i < numbers.length; i++) {
    tempStr += numbers[i];

    if (numberMappingObj[tempStr]) {
      result += numberMappingObj[tempStr];
      tempStr = "";
    }
  }

  return +result;
}

// 정규 표현식 풀이
function solution(numbers) {
  const numberMappingObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const regex = /zero|one|two|three|four|five|six|seven|eight|nine/g;

  return +numbers.replace(regex, (v) => {
    return numberMappingObj[v];
  });
}
