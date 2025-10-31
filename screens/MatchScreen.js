// screens/MatchScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function MatchScreen({ route, navigation }) {
  const { pickup, destination, riders, time } = route.params;
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    setCandidates([
      { id: 101, detour: 2, users: 1 },
      { id: 102, detour: 4, users: 2 },
    ]);
  }, []);

  const joinRide = (candidate) => {
    navigation.replace('Ride', { rideId: candidate.id });
  };

  const renderCandidate = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>🚗 동승 후보 #{item.id}</Text>
      <Text>추가 시간: {item.detour}분</Text>
      <Text>현재 인원: {item.users}명</Text>
      <Button title="참여하기" onPress={() => joinRide(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>동승 정보</Text>
      <Text>출발지: {pickup}</Text>
      <Text>목적지: {destination}</Text>
      <Text>인원: {riders}명</Text>
      <Text>출발 시간: {time}</Text>

      <Text style={[styles.title, { marginTop: 20 }]}>동승 후보 목록</Text>
      <FlatList
        data={candidates}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderCandidate}
        ListEmptyComponent={<Text>동승 후보가 없습니다.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  card: {
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});