import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../offers/HomeScreen";
import NotificationMenuButton from "./NotificationMenuButton";
import ProfileMenuButton from "./ProfileMenuButton";
import NotificationsScreen from "../notifications/NotificationsScreen";
import ProfileStackScreen from "./ProfileStackScreen";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Offres"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <>
              <NotificationMenuButton />
              <ProfileMenuButton/>
            </>
          ),
        }}
      />
      <HomeStack.Screen name="Profile" component={ProfileStackScreen} />
      <HomeStack.Screen name="Notifications" component={NotificationsScreen} />
      {/* Offers details for later : <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </HomeStack.Navigator>
  );
}
