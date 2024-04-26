import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Drawer, PaperProvider } from 'react-native-paper';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import CustomNavigationBar from './CustomNavigationBar';
import MyDrawer from './Screens/Drawer';
import ButtonTabs from './Screens/ButtonTab';
const Stack = createStackNavigator();

export default function App() {
  return (
   <PaperProvider>
      <NavigationContainer>
      {/* <MyDrawer></MyDrawer> */}
      <ButtonTabs/>
        {/* <Stack.Navigator initialRouteName="Home" screenOptions={{header:(props)=><CustomNavigationBar {...props}/>}}>
              <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
              <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
        </Stack.Navigator> */}
      </NavigationContainer>
   </PaperProvider>

  );
}