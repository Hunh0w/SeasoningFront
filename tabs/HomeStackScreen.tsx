import * as React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../components/HomeScreen';

const SettingsStack = createNativeStackNavigator();

export default function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Offres" component={HomeScreen} />
      {/* Offers details for later : <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </SettingsStack.Navigator>
  );
}