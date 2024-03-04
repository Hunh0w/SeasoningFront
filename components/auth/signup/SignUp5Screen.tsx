import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text, Avatar } from "react-native-paper";

// Import store features
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setUserConnected } from "../../../store/user";

import { NavigationProps } from "../../misc/interfaces";

// Import document from library to app
import * as DocumentPicker from "expo-document-picker";
import axiosInstance from "../../misc/api";

// SignUp screen step 5 : profile picture and presentation sentences (input)
export default function SignUpProfileScreen({
  route,
  navigation,
}: NavigationProps) {
  // TODO : Change navigation type to correct one
  const [description, setDescription] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const dispatch = useDispatch();

  // Retrieve user state from store
  const user = useSelector((state: RootState) => state.user);

  const handleUploadPic = async () => {
    const res = await DocumentPicker.getDocumentAsync({
      type: ["image/png", "image/jpeg"],
    });
    setProfilePic({ singleFile: res });
  };

  const handleSignUp = async () => {
    //- Check if any file is selected or not
    if (profilePic.singleFile != null) {
      // If file selected then create FormData
      const fileToUpload = profilePic.singleFile;
      const data = new FormData();
      data.append("name", "Profile picture");
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
      if (true) {
        try {
          await axiosInstance
            .post("/profile", { ...route.params })
            .then((profileData) => {
              console.log("User profile:", profileData);
              dispatch(setUserConnected(true));
            })
            .catch((error) => {
              console.error("Error fetching user profile:", error);
            });
        } catch (error) {
          console.error("Error creating profile:", error);
        }
      } else {
        //if no file selected the show alert
        alert("Please Select File first");
      }
    }
  };

  return (
    <View style={styles.signupPage}>
      <Text style={styles.text} variant="titleLarge">
        Your profile
      </Text>
      <Avatar.Image source={profilePic?.url || "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=826&t=st=1709528450~exp=1709529050~hmac=e5284a21373ca72eafb0553b8542ddd874649e8df9b5da458d1000ec54c21d91"}></Avatar.Image>
      <Button
        style={styles.signupButton}
        mode="contained"
        onPress={handleUploadPic}
      >
        Upload photo
      </Button>
      <TextInput
        contentStyle={{ textAlign: "left", textAlignVertical: "top" }}
        style={{ height: 300 }}
        label="Brief description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button
        style={styles.signupButton}
        mode="contained"
        onPress={handleSignUp}
        disabled={profilePic && description ? false : true}
      >
        Create account
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
