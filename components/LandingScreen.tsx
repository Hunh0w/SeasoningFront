import { StyleSheet, View } from "react-native";
import { Avatar, Text, Button } from "react-native-paper";

// Landing screen (1st screen of the app)
export default function LandingScreen({ navigation }: { navigation: any }) {
  // TODO : Change navigation type to correct one !
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
        <Button mode="contained" onPress={() => navigation.navigate("Signin")}>
          Log In
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate("Signup")}>
          Sign Up
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
});
