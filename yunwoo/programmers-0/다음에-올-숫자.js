function solution(common) {
  return common[1] - common[0] === common[2] - common[1]
    ? common[0] + common.length * (common[1] - common[0])
    : common[common.length - 1] * 2;
}

/*
(풀이)
다른 index 두 요소 사이의 값을 빼준값이 동일하면 등차수열 아니면 등비수열로 처리.
등차 수열의 다음 값은 첫요소 + 수열의 개수 - 1 * 공차인데 내가 원하는 값은 현재값의 다음값이기에
길이를 이용하여 -1 을 안해줬다.
등비 수열은 간단하게 * 2 하여 끝.
*/
