// ai/estimateTravelTime.js
export async function estimateTravelTime(origin, destination) {
  // 간단한 더미 로직 (추후 OpenAI 등 연동 가능)
  if (!origin || !destination) {
    return '출발지와 목적지를 입력해주세요.';
  }

  // 기본적인 예시: 단순히 거리 추정해 소요시간 계산
  const sampleEstimates = [
    '약 10분',
    '약 25분',
    '약 40분',
    '약 1시간',
    '약 1시간 20분',
  ];
  const random = Math.floor(Math.random() * sampleEstimates.length);
  return sampleEstimates[random];
}
