import * as React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from '../auth/signup/SignUp1Screen';
import SignUpYourselfScreen from '../auth/signup/SignUp2Screen';
import SignUpPersonalScreen from '../auth/signup/SignUp3Screen';
import SignUpCVScreen from '../auth/signup/SignUp4Screen';
import SignUpProfileScreen from '../auth/signup/SignUp5Screen';

const SignupStack = createNativeStackNavigator();

export default function SignupStackScreen() {
  return(
    <SignupStack.Navigator initialRouteName='Signup_step1'>
      <SignupStack.Screen name="Signup_step1" component={SignUpScreen} />
      <SignupStack.Screen name="Signup_step2" component={SignUpYourselfScreen} />
      <SignupStack.Screen name="Signup_step3" component={SignUpPersonalScreen} />
      <SignupStack.Screen name="Signup_step4" component={SignUpCVScreen} />
      <SignupStack.Screen name="Signup_step5" component={SignUpProfileScreen} />
    </SignupStack.Navigator>
  );
}