import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import MatchScreen from "./screens/MatchScreen";
import ChatCreateScreen from "./screens/ChatCreateScreen";
import RideScreen from "./screens/RideScreen";
import KakaoMapScreen from "./screens/KakaoMapScreen"; // ✅ Kakao 지도 화면 추가

const Stack = createStackNavigator(); // ✅ 이건 함수 밖에서 선언

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "홈" }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: "동승자 검색" }} />
        <Stack.Screen name="Match" component={MatchScreen} options={{ title: "매칭 결과" }} />
        <Stack.Screen name="ChatCreate" component={ChatCreateScreen} options={{ title: "오픈채팅 생성" }} />
        <Stack.Screen name="Ride" component={RideScreen} options={{ title: "동승 중" }} />
        <Stack.Screen name="KakaoMap" component={KakaoMapScreen} options={{ title: "카카오 지도" }} /> {/* ✅ 여기에 추가 */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

