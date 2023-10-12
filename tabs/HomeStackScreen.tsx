import * as React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../components/HomeScreen';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Offres" component={HomeScreen} />
      {/* Offers details for later : <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </HomeStack.Navigator>
  );
}