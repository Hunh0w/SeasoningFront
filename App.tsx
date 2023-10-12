import * as React from "react";

import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import EmployersStackScreen from "./tabs/EmployersStackScreen";
import HomeStackScreen from "./tabs/HomeStackScreen";
import MessagesStackScreen from "./tabs/MessagesStackScreen";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Offers"
        activeColor="#291efc"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#ffff" }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Offres",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="EmployersTab"
          component={EmployersStackScreen}
          options={{
            tabBarLabel: "Employeurs",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-group"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MessagesTab"
          component={MessagesStackScreen}
          options={{
            tabBarLabel: "Messages",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="android-messages"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
