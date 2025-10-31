// utils/kakao.js
export const searchAddressToCoords = async (address) => {
  const res = await fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${address}`, {
    headers: {
      Authorization: `4af76c7daf177fa9e40c696977556c39`, // 여기에 키 넣기
    },
  });
  const json = await res.json();
  const { x, y } = json.documents[0];
  return { latitude: parseFloat(y), longitude: parseFloat(x) };
};