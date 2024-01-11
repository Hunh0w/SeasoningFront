import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

// Import store reducer and exported type
import { useDispatch, useSelector } from "react-redux";
import { setUserConnected } from "../../../store/user";
import { RootState } from "../../../store/store";

// Formik login validation schema
import { Formik } from "formik";
import { loginValidationScheme } from "../../misc/validators";

import { Profile } from "../../misc/interfaces";

// SignIn screen (email & password)
export default function SignInScreen() {
  const dispatch = useDispatch();

  // Retrieve user state from store
  const user = useSelector((state: RootState) => state.user);

  const handleLogin = (values: Profile) => {
    try {
      // TODO : Call API to connect user
      dispatch(setUserConnected(true));
    } catch (error) {
      console.error(values);
    }
  };

  return (
    <View style={styles.signinPage}>
      <Text style={styles.text} variant="titleLarge">
        Sign In
      </Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={loginValidationScheme}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <>
            <TextInput
              label="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <TextInput
              label="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              keyboardType="default"
              secureTextEntry={true}
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Button
              style={styles.signinButton}
              mode="contained"
              onPress={handleSubmit}
              disabled={!isValid}
            >
              Login
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  signinPage: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },
  signinButton: {
    marginTop: 50,
  },
  text: {
    marginBottom: 20,
  },
  error: {
    color: "red",
    alignSelf: "center",
  },
});
