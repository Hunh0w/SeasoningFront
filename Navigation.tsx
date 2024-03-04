import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import useSelector to retrieve user info from store
import { useSelector } from "react-redux";

// Import state type
import { RootState } from "./store/store";

// Import screens
import EmployersStackScreen from "./components/tabs/EmployersStackScreen";
import HomeStackScreen from "./components/tabs/HomeStackScreen";
import MessagesStackScreen from "./components/tabs/MessagesStackScreen";
import LandingScreen from "./components/LandingScreen";
import SignupStackScreen from "./components/tabs/SignupStackScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Navigator for non-connected users (landing, signIn, signUp pages)
function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Signup" component={SignupStackScreen} />
    </Stack.Navigator>
  );
}

// Navigator for connected users (Offers, Employers and Messages)
function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Offers"
      activeColor="#291efc"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#ffff" }}
    >
      <Tab.Screen
        name="Offers"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Offres",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Employeurs"
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
        name="Messages"
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
  );
}

// Check user authentication FRONT side
export default function Navigation() {
  // Check user auth
  const user = useSelector((state: RootState) => state.user);
  // console.log("User state => ", user);
  return (
    <NavigationContainer>
      {user.connected ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
