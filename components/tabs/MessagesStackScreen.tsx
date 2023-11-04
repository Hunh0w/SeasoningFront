import * as React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MessageListScreen from '../messages/MessageListScreen';
import MessagesScreen from '../messages/MessagesScreen';

const MessagesStack = createNativeStackNavigator();

export default function MessagesStackScreen() {

  return (
      <MessagesStack.Navigator>
        <MessagesStack.Screen name="Contacts" component={MessageListScreen} />
        <MessagesStack.Screen name="Messages" component={MessagesScreen} />
      </MessagesStack.Navigator>  
  );
}