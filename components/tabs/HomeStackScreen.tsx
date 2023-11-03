import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../HomeScreen";
import NotificationMenuButton from "../NotificationMenuButton";
import ProfileMenuButton from "../ProfileMenuButton";

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
              <NotificationMenuButton notifications={[]} />
              <ProfileMenuButton
                user={{
                  name: "Raimbault",
                  surname: "Adrien",
                  avatar: "/db/test.png",
                }}
              />
            </>
          ),
        }}
      />
      {/* Offers details for later : <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </HomeStack.Navigator>
  );
}
