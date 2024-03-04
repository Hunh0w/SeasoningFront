import { useAutoDiscovery } from "expo-auth-session";
import { StyleSheet, View } from "react-native";
import { Avatar, Text, Button } from "react-native-paper";
import { handleLogin } from "../auth/sso";
import { useDispatch } from "react-redux";
import { setUserConnected } from "../store/user";
import axios from "axios";
import { EXPO_PUBLIC_AUTH_URL, EXPO_PUBLIC_BASE_URL } from "./misc/env";
import axiosInstance from "./misc/api";

// Landing screen (1st screen of the app)
export default function LandingScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const discovery = useAutoDiscovery(
    `${EXPO_PUBLIC_AUTH_URL}/realms/seasoning`
  );

  const login = async () => {
    if (discovery) {
      const response = await handleLogin(discovery);
      if (response) {
        try {
          axiosInstance
            .get(`/profile/me`)
            .then((response) => {
              if (response.status && response.data) {
                // If profile in db, set user connected to true
                dispatch(setUserConnected(true));
              } else {
                navigation.navigate("Signup");
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
  };

  return (
    <View style={styles.landingText}>
      {/* TODO : Add logo, text and button for signIn & signUp */}
      <Avatar.Image
        size={300}
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
      <Text>Welcome to</Text>
      <Text variant="displaySmall">Seasoning</Text>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="contained" onPress={login}>
          Getting started
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  landingText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  buttons: {
    flexDirection: "row",
    padding: 30,
  },
  logo: {
    backgroundColor: "transparent",
  },
  button: {
    marginTop: 50,
  },
});
