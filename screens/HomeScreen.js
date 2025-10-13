import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [destination, setDestination] = useState('');

  const requestRide = () => {
    navigation.navigate('Match', { requestId: 123 });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>목적지를 입력하세요</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
        placeholder="예: 강남역"
        value={destination}
        onChangeText={setDestination}
      />
      <Button title="택시 요청" onPress={requestRide} />
    </View>
  );
}