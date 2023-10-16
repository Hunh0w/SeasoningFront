import * as React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessageListScreen from '../components/messages/MessageListScreen';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-ui-lib';
import MessagesScreen from '../components/messages/MessagesScreen';

const MessagesStack = createNativeStackNavigator();

export default function MessagesStackScreen() {

  return (
      <MessagesStack.Navigator>
        <MessagesStack.Screen name="Contacts" component={MessageListScreen} />
        <MessagesStack.Screen name="Messages" component={MessagesScreen} />
      </MessagesStack.Navigator>  
  );
}