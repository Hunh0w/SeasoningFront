import * as React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessagesScreen from '../components/MessagesScreen';

const MessagesStack = createNativeStackNavigator();

export default function MessagesStackScreen() {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen name="Messages" component={MessagesScreen} />
      {/* Conversation : <MessagesStack.Screen name="Details" component={ConversationScreen} /> */}
    </MessagesStack.Navigator>
  );
}