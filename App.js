import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import NavigationContainerRoot from './routes/RootStackNavigator';
import HomeScreen from './src/Screens/HomeScreen';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainerRoot />
    </GestureHandlerRootView>
    // <HomeScreen />
  );
}
