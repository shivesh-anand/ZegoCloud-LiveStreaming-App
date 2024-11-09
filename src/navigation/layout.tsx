import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AudienceScreen from '../screens/audienceScreen';
import HomeScreen from '../screens/HomeScreen';
import HostScreen from '../screens/hostScreen';

const Stack = createNativeStackNavigator();

const Layout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Host" component={HostScreen} />
        <Stack.Screen name="Audience" component={AudienceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
