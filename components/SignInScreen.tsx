import { StyleSheet, View, Button } from "react-native";

// Import store reducer and exported type
import { useDispatch, useSelector } from "react-redux";
import { setUserConnected } from "../store/user";
import { RootState } from "../store/store";

// SignIn screen (email & password asked)
export default function SignInScreen() {
  const dispatch = useDispatch();

  // Retrieve user state from store
  const user = useSelector((state: RootState) => state.user);

  const handleSignIn = () => {
    dispatch(setUserConnected(true));
  };

  return (
    <View style={styles.signinPage}>
      {/* TODO : Add form (email & password) */}
      <Button title="Sign In" onPress={handleSignIn}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  signinPage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
