import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useState } from "react";

// Import document from library to app
import * as DocumentPicker from "expo-document-picker";

import { NavigationProps } from "../misc/interfaces";

// SignUp screen step 4 : CV upload
export default function SignUpCVScreen({ route, navigation }: NavigationProps) {
  const [cv, setCv] = useState(null);

  const handleUploadCV = async () => {
    const res = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    setCv({ singleFile: res });
  };

  const handleSignUp = async () => {
    //- Check if any file is selected or not
    if (cv.singleFile != null) {
      // If file selected then create FormData
      const fileToUpload = cv.singleFile;
      const data = new FormData();
      data.append("name", "CV Uploaded");
      data.append("file_attachment", fileToUpload);
      // let res = await fetch("TODO : add correct api call", {
      //   method: "post",
      //   body: data,
      //   headers: {
      //     "Content-Type": "multipart/form-data; ",
      //   },
      // });
      // let responseJson = await res.json();
      // if (responseJson.status == 1) {
      if (1 == 1) {
        // DELETE THIS AFTER UNCOMMENT
        // Navigate to last signup panel
        navigation.navigate("Signup_step5", {
          ...route.params,
          // TODO : Add CV uploaded link
        });
      }
    } else {
      //if no file selected the show alert
      alert("Please Select File first");
    }
  };

  return (
    <View style={styles.signupPage}>
      {/* TODO : Add form (email & password) */}
      <Text style={styles.text} variant="titleLarge">
        Upload your CV
      </Text>
      <Button
        style={styles.signupButton}
        mode="outlined"
        onPress={handleUploadCV}
      >
        Upload file
      </Button>
      <Text style={{ textAlign: "center" }}>
        {cv != null ? "File imported" : ""}
      </Text>
      <Button
        style={styles.signupButton}
        mode="contained"
        onPress={handleSignUp}
        disabled={cv != null ? false : true}
      >
        Next
      </Button>
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
});
