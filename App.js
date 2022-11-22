import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './screens/signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from './foodApp/homeScreen';
import detailsScreen from './foodApp/detailsScreen';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homeScreen} options={
          { headerShown: false }
        } />
        <Stack.Screen name="Details" component={detailsScreen} options={
          { headerShown: false }
        } />
      </Stack.Navigator>
    </NavigationContainer>
    // <Signup/>
    //  <StatusBar style='auto'/>
  );
}


