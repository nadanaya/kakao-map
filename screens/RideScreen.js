import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

export default function RideScreen() {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [loading, setLoading] = useState(false);

  const KAKAO_API_KEY = '4af76c7daf177fa9e40c696977556c39';

  const handleMapPress = async (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;

    if (!origin) {
      setOrigin({ latitude, longitude });
    } else if (!destination) {
      setDestination({ latitude, longitude });
      await calculateRoute(origin, { latitude, longitude });
    } else {
      setOrigin({ latitude, longitude });
      setDestination(null);
      setDistance(null);
      setDuration(null);
    }
  };

  const calculateRoute = async (start, end) => {
    setLoading(true);
    try {
      const url = `https://apis-navi.kakaomobility.com/v1/directions?origin=${start.longitude},${start.latitude}&destination=${end.longitude},${end.latitude}`;
      const res = await axios.get(url, {
        headers: {
          Authorization: `KakaoAK ${KAKAO_API_KEY}`,
        },
      });

      const summary = res.data.routes[0]?.summary;
      if (summary) {
        setDistance((summary.distance / 1000).toFixed(2)); // km
        setDuration((summary.duration / 60).toFixed(1)); // 분
      } else {
        Alert.alert('경로 없음', '경로 정보를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('거리 계산 실패', '카카오 경로 정보를 불러올 수 없습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.5665,
          longitude: 126.9780,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onPress={handleMapPress}
      >
        {origin && <Marker coordinate={origin} title="출발지" pinColor="green" />}
        {destination && <Marker coordinate={destination} title="도착지" pinColor="red" />}
      </MapView>

      <View style={styles.infoBox}>
        {!origin && <Text>🟢 지도를 눌러 출발지를 선택하세요</Text>}
        {origin && !destination && <Text>🔴 도착지를 선택하세요</Text>}
        {origin && destination && (
          <View>
            <Text>
              출발지: {origin.latitude.toFixed(4)}, {origin.longitude.toFixed(4)}
            </Text>
            <Text>
              도착지: {destination.latitude.toFixed(4)}, {destination.longitude.toFixed(4)}
            </Text>
            {loading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <View>
                {distance && <Text>📍 거리: {distance} km</Text>}
                {duration && <Text>⏱️ 예상 소요시간: {duration}분</Text>}
              </View>
            )}
          </View>
        )}
        <Button
          title="초기화"
          onPress={() => {
            setOrigin(null);
            setDestination(null);
            setDistance(null);
            setDuration(null);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 2 },
  infoBox: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'center',
  },
});