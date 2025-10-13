import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function MatchScreen({ route, navigation }) {
  const { requestId } = route.params;
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    setCandidates([
      { id: 1, detour: 2, users: 1 },
      { id: 2, detour: 4, users: 2 },
    ]);
  }, []);

  const joinRide = (candidate) => {
    navigation.replace('Ride', { rideId: 987 });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>동승 후보</Text>
      <FlatList
        data={candidates}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10, borderBottomWidth: 1, paddingBottom: 10 }}>
            <Text>추가 시간: {item.detour}분</Text>
            <Text>현재 인원: {item.users}명</Text>
            <Button title="참여" onPress={() => joinRide(item)} />
          </View>
        )}
      />
    </View>
  );
}