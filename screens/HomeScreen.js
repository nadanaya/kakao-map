import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [pickup, setPickup] = useState('기흥역');
  const [destination, setDestination] = useState('명지대학교');
  const [riders, setRiders] = useState('1');
  const [time, setTime] = useState('08:30');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
  source={{ uri: 'https://copilot.microsoft.com/th/id/BCO.c5f4b4c4-32d8-401b-827f-2766719c0df2.png' }}
  style={styles.map}
/>

      <Text style={styles.title}>🚕 새로운 여정 찾기</Text>
      <Text style={styles.subtitle}>
        출발지와 목적지를 입력하여 동승자를 찾아보세요
      </Text>

      <Text style={styles.label}>출발지</Text>
      <TextInput
        style={styles.input}
        placeholder="예: 강남역"
        value={pickup}
        onChangeText={setPickup}
      />

      <Text style={styles.label}>목적지</Text>
      <TextInput
        style={styles.input}
        placeholder="예: 판교역"
        value={destination}
        onChangeText={setDestination}
      />

      <Text style={styles.label}>인원</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={riders}
        onChangeText={setRiders}
      />

      <Text style={styles.label}>출발 시간</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={setTime}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="동승자 검색 🔍"
          onPress={() =>
            navigation.navigate('Match', {
              pickup,
              destination,
              riders,
              time,
            })
          }
          color="#007AFF"
        />
        <View style={{ marginTop: 10 }} />
        <Button
          title="카카오 지도 보기 🗺️"
          onPress={() => navigation.navigate('KakaoMap')}
          color="#34C759"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'stretch',
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 12,
  },
  buttonContainer: {
    marginTop: 10,
  },
});