import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Title, Card, Divider, Avatar } from "react-native-paper";
import { useState } from "react";
import { Profile } from "../misc/interfaces";

type Props = {
  profile: Profile
}

export default function ProfileInfos({ profile }: Props) {
  const [email, setEmail] = useState(profile.email);
  const [birthday, setBirthday] = useState(profile.dateOfBirth);
  const [gender, setGender] = useState(profile.gender);
  const [phone, setPhone] = useState(profile.phone);
  const [address, setAddress] = useState(profile.address);
  const [description, setDescription] = useState(profile.description);
  return (
    <>
      <View style={styles.profileHeader}>
        <Avatar.Image
          size={120}
          source={{
            uri: "https://i.guim.co.uk/img/media/5ed54edd5d9d620487c523150e4672e3df43e442/0_197_3000_1800/master/3000.jpg?width=445&dpr=1&s=none",
          }}
          style={styles.avatar}
        />
        <Title style={styles.title}>
          {profile.name} {profile.surname}
        </Title>
        <View>
          <TextInput
            label="Email"
            value={email}
            outlineColor="white"
            underlineColor="#0066FF"
            mode="outlined"
            style={styles.info}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
          <TextInput
            label="Birthday"
            value={birthday}
            outlineColor="white"
            mode="outlined"
            style={styles.info}
            onChangeText={(text) => setBirthday(text)}
          ></TextInput>
          <TextInput
            label="Gender"
            value={gender}
            outlineColor="white"
            mode="outlined"
            style={styles.info}
            onChangeText={(text) => setGender(text)}
          ></TextInput>
          <TextInput
            label="Phone"
            value={phone}
            outlineColor="white"
            mode="outlined"
            style={styles.info}
            onChangeText={(text) => setPhone(text)}
          ></TextInput>
          <TextInput
            label="Address"
            value={address}
            outlineColor="white"
            mode="outlined"
            style={styles.info}
            onChangeText={(text) => setAddress(text)}
          ></TextInput>
        </View>
      </View>
      <Divider style={styles.divider} />
      <Card style={styles.descriptionCard}>
        <Card.Content>
          <Title>Description</Title>
          <TextInput
            value={description}
            multiline={true}
            outlineColor="white"
            mode="outlined"
            onChangeText={(text) => setDescription(text)}
          ></TextInput>
        </Card.Content>
      </Card>
      <Divider style={styles.divider} />
    </>
  );
}

const styles = StyleSheet.create({
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    marginBottom: 10,
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  infoContainer: {
    alignItems: "flex-start",
    marginBottom: 20,
  },
  info: {
    marginBottom: 5,
    fontSize: 16,
  },
  divider: {
    height: 2,
    width: "90%",
    backgroundColor: "#ccc",
    marginBottom: 20,
  },
  descriptionCard: {
    width: "90%",
  },
});
