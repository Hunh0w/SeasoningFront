import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotificationMenuButton from "../notifications/NotificationMenuButton";
import ProfileMenuButton from "../profile/ProfileMenuButton";
import NotificationsScreen from "../notifications/NotificationsScreen";
import ProfileStackScreen from "./ProfileStackScreen";
import SearchScreen from "../offers/SearchScreen";
import OffersScreen from "../offers/OffersScreen";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Offres"
        component={OffersScreen}
        options={{
          headerRight: () => (
            <>
              <NotificationMenuButton />
              <ProfileMenuButton/>
            </>
          ),
        }}
      />
      <HomeStack.Screen name="SearchResults" component={SearchScreen} />
      <HomeStack.Screen name="Profile" component={ProfileStackScreen} />
      <HomeStack.Screen name="Notifications" component={NotificationsScreen} />
    </HomeStack.Navigator>
  );
}
