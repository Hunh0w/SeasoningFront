import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpYourselfScreen from "../auth/signup/SignUp2Screen";
import SignUpPersonalScreen from "../auth/signup/SignUp3Screen";
import SignUpCVScreen from "../auth/signup/SignUp4Screen";
import SignUpProfileScreen from "../auth/signup/SignUp5Screen";

const SignupStack = createNativeStackNavigator();

export default function SignupStackScreen() {
  return (
    <SignupStack.Navigator initialRouteName="Signup_step2">
      <SignupStack.Screen
        name="Signup_step2"
        options={{
          title: "Register step 1",
        }}
        component={SignUpYourselfScreen}
      />
      <SignupStack.Screen
        name="Signup_step3"
        options={{
          title: "Register step 2",
        }}
        component={SignUpPersonalScreen}
      />
      <SignupStack.Screen
        name="Signup_step4"
        options={{
          title: "Register step 3",
        }}
        component={SignUpCVScreen}
      />
      <SignupStack.Screen
        name="Signup_step5"
        options={{
          title: "Register step 4",
        }}
        component={SignUpProfileScreen}
      />
    </SignupStack.Navigator>
  );
}
