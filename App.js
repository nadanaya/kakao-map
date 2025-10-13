import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MatchScreen from './screens/MatchScreen';
import RideScreen from './screens/RideScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '택시 호출' }} />
        <Stack.Screen name="Match" component={MatchScreen} options={{ title: '동승 매칭' }} />
        <Stack.Screen name="Ride" component={RideScreen} options={{ title: '라이드 진행' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
