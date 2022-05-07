import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';

import Navigation from './src/services/config/navigation';
export default function App() {
  return (
    <View style={{flex: 1}}>
      <Navigation />
    </View>
  );
}
