import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployersScreen from "../components/EmployersScreen";

const EmployersStack = createNativeStackNavigator();

export default function EmployersStackScreen() {
  return (
    <EmployersStack.Navigator>
      <EmployersStack.Screen
        name="EmployersStackScreen"
        options={{
          title: "Employeurs"
        }}
        component={EmployersScreen}
      />
      {/* For employer profile details/overview <EmployersStack.Screen name="EmployersProfile" component={EmployerProfileScreen} /> */}
      
    </EmployersStack.Navigator>
  );
}
