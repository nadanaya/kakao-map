import React from 'react';
import { View, Text, Button } from 'react-native';

export default function RideScreen({ route }) {
  const { rideId } = route.params;

  const completeRide = () => {
    alert('하차 완료! 요금 12,000원, 자동 분담 계산 완료');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>라이드 진행 중</Text>
      <Text>Ride ID: {rideId}</Text>
      <Button title="하차 및 요금 확정" onPress={completeRide} />
    </View>
  );
}