import { useAutoDiscovery } from "expo-auth-session";
import { StyleSheet, View } from "react-native";
import { Avatar, Text, Button } from "react-native-paper";
import { handleLogin } from "../auth/sso";
import { useDispatch } from "react-redux";
import { setUserConnected } from "../store/user";

// Landing screen (1st screen of the app)
export default function LandingScreen({ navigation }: { navigation: any }) {
  // TODO : Change navigation type to correct one !
  const dispatch = useDispatch();
  const discovery = useAutoDiscovery(
    "https://auth.araimbault.com/realms/seasoning"
  );

  const login = async () => {
    if (discovery) {
      const response = await handleLogin(discovery);
      if (response === 200) {
        dispatch(setUserConnected(true));
      }
    }
  };

  const signup = async () => {
    if (discovery) {
      const response = await handleLogin(discovery);
      if (response === 200) {
        dispatch(setUserConnected(true));
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
          Login
        </Button>
        <Button style={styles.button} mode="contained" onPress={signup}>
          Register
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
