import { StyleSheet, View } from "react-native";
import {
  TextInput,
  Button,
  Text,
  RadioButton,
  Portal,
  Modal,
} from "react-native-paper";

import { useState } from "react";
import { genders } from "../../misc/genre";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

import { NavigationProps, Register2 } from "../../misc/interfaces";
import { Formik } from "formik";
import { register2ValidationScheme } from "../../misc/validators";

// SignUp screen step 2 : name, surname, birth date & genre
export default function SignUpYourselfScreen({
  route,
  navigation,
}: NavigationProps) {
  const [modal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  };
  const showModal = () => {
    setShowModal(true);
  };

  const handleSignUp = (values: Register2) => {
    navigation.navigate("Signup_step3", {
      ...route.params,
      name: values.name,
      surname: values.surname,
      birth: values.birth,
      genre: values.genre,
    });
  };

  return (
    <View style={styles.signupPage}>
      <Text style={styles.text} variant="titleLarge">
        About yourself
      </Text>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          birth: "",
          genre: "",
        }}
        onSubmit={(values) => handleSignUp(values)}
        validationSchema={register2ValidationScheme}
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
              label="Name *"
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
            />
            {errors.name && touched.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}
            <TextInput
              label="Surname *"
              value={values.surname}
              onChangeText={handleChange("surname")}
              onBlur={handleBlur("surname")}
            />
            {errors.surname && touched.surname && (
              <Text style={styles.error}>{errors.surname}</Text>
            )}
            <TextInput
              label="Birth date (JJMMAAAA) *"
              value={values.birth}
              onChangeText={handleChange("birth")}
              onBlur={handleBlur("birth")}
            />
            {errors.birth && touched.birth && (
              <Text style={styles.error}>{errors.birth}</Text>
            )}
            <TextInput
              placeholder="Genre"
              value={values.genre}
              onChangeText={handleChange("genre")}
              onBlur={handleBlur("genre")}
              onPressIn={showModal}
              mode="outlined"
            />
            {errors.genre && touched.genre && (
              <Text style={styles.error}>{errors.genre}</Text>
            )}
            {/* Gender selection menu */}
            <Portal>
              <Modal
                visible={modal}
                onDismiss={hideModal}
                contentContainerStyle={{
                  backgroundColor: "white",
                  padding: 20,
                  height: 380,
                }}
              >
                <GestureHandlerRootView>
                  <ScrollView>
                    <RadioButton.Group
                      onValueChange={handleChange("genre")}
                      value={values.genre}
                    >
                      {genders.map((gender) => {
                        return (
                          <RadioButton.Item
                            key={gender}
                            label={gender}
                            value={gender}
                          />
                        );
                      })}
                    </RadioButton.Group>
                  </ScrollView>
                </GestureHandlerRootView>
              </Modal>
            </Portal>
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
