import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../components/Home';
import DrawerContent from '../../components/DrawerContent';
import SearchScreen from '../../components/SearchScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="NewsDrawer" component={NewsDrawer} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const NewsDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerTintColor: '#000',
        headerTitleStyle: {color: '#fff'},
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="SearchScreen" component={SearchScreen} />
    </Drawer.Navigator>
  );
};
export default App;
