import React from 'react';
import { WebView } from 'react-native-webview';

const KakaoMapScreen = () => {
  return (
    <WebView
      source={{ uri: 'https://nadanaya.github.io/kakao-map/kakaomap.html' }}
      style={{ flex: 1 }}
    />
  );
};

export default KakaoMapScreen;