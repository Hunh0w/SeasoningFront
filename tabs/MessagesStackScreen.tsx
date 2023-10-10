import * as React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessagesScreen from '../components/MessagesScreen';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-ui-lib';

const MessagesStack = createNativeStackNavigator();

export default function MessagesStackScreen() {

  return (
      <MessagesStack.Navigator>
        <MessagesStack.Screen name="Messages" component={MessagesScreen} />
      </MessagesStack.Navigator>
  );
}