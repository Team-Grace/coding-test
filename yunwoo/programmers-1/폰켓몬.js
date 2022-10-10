function solution(nums) {
  const numsSetSize = new Set(nums).size;
  const numsHalfCount = nums.length / 2;

  return numsSetSize > numsHalfCount ? numsHalfCount : numsSetSize;
}

/*

(풀이)
주어진 배열을 Set 객체로 변환하여 중복을 제거해주고
numsSetSize가 nums의 개수 / 2 보다 많으면 nums.length의 절반인 numsHalfCount를 리턴해주고
아니면 numsSetSize를 리턴해준다.

솔직히 또 히든케이스가 있다던가 해서 실패할 줄 알았는데 통과됐다.

테스트의 이름을 보니 해시인데 관련 자료를 찾아보니 해시는 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑
한다는데 이 문제는 단지 주어진 배열에서 주어진 수만큼 많은 종류를 고르는 문제인데 해시와 연관이 어떻게 되어있는지 궁금합니다!

*/
