import { StyleSheet, View } from "react-native";
import { Button, Modal, Portal, Text, TextInput } from "react-native-paper";

// Input validation
import { Formik } from "formik";
import { register1ValidationScheme } from "../misc/validators";

// Import interfaces
import { NavigationProps, Register1 } from "../misc/interfaces";
import { useState } from "react";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

// SignUp screen step 1 : email, password & password confirmation + t&d checkbox
export default function SignUpScreen({ navigation }: NavigationProps) {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleSignUp = (values: Register1) => {
    navigation.navigate("Signup_step2", {
      email: values.email,
      password: values.password,
    });
  };

  return (
    <View style={styles.signupPage}>
      {/* TODO : Add form (email & password) */}
      <Text style={styles.text} variant="titleLarge">
        Sign Up
      </Text>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          terms: "unchecked",
        }}
        onSubmit={(values) => handleSignUp(values)}
        validationSchema={register1ValidationScheme}
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
            <Portal>
              <Modal
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={{
                  backgroundColor: "white",
                  padding: 20,
                  height: "80%",
                }}
              >
                <GestureHandlerRootView>
                  <ScrollView>
                    <Text>TODO : Add terms & conditions</Text>
                  </ScrollView>
                </GestureHandlerRootView>
              </Modal>
            </Portal>
            <TextInput
              label="Email"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <TextInput
              label="Password"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <TextInput
              label="Confirm password"
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}
            <Button
              style={styles.signupButton}
              mode="contained"
              onPress={handleSubmit}
              disabled={!isValid}
            >
              Next
            </Button>
            <Text onPress={showModal}>
              <Text> As you continue, you agree to </Text>
              <Text style={{ color: "blue", fontStyle: "italic" }}>
                Terms and condition
              </Text>
              <Text> of the application.</Text>
            </Text>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  signupPage: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },
  signupButton: {
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
