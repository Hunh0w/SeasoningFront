import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

import { NavigationProps, Register3 } from "../misc/interfaces";
import { register3ValidationScheme } from "../misc/validators";
import { Formik } from "formik";

// SignUp screen step 3 : phone number, address (& city + country)
export default function SignUpPersonalScreen({
  route,
  navigation,
}: NavigationProps) {
  const handleSignUp = (values: Register3) => {
    // TODO : API call to register new user
    navigation.navigate("Signup_step4", {
      ...route.params,
      phone: values.phone,
      address: values.address,
      city: values.city,
      country: values.country,
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
          phone: "",
          address: "",
          city: "",
          country: "",
        }}
        onSubmit={(values) => handleSignUp(values)}
        validationSchema={register3ValidationScheme}
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
              label="Phone number"
              value={values.phone}
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
            />
            {errors.phone && touched.phone && (
              <Text style={styles.error}>{errors.phone}</Text>
            )}
            <TextInput
              label="Address"
              value={values.address}
              onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}
            />
            {errors.address && touched.address && (
              <Text style={styles.error}>{errors.address}</Text>
            )}
            <TextInput
              label="City"
              value={values.city}
              onChangeText={handleChange("city")}
              onBlur={handleBlur("city")}
            />
            {errors.city && touched.city && (
              <Text style={styles.error}>{errors.city}</Text>
            )}
            <TextInput
              label="Country"
              value={values.country}
              onChangeText={handleChange("country")}
              onBlur={handleBlur("country")}
            />
            {errors.country && touched.country && (
              <Text style={styles.error}>{errors.country}</Text>
            )}
            <Button
              style={styles.signupButton}
              mode="contained"
              onPress={handleSubmit}
              disabled={!isValid}
            >
              Next
            </Button>
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
