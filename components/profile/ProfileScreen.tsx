import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Title, Divider, IconButton, Button } from "react-native-paper";
import ExperienceItem from "./experiences/ExperienceItem";
import { useState } from "react";
import RatingItem from "./ratings/RatingItem";
import ProfileInfos from "./ProfileInfos";
import AvailabilityItem from "./availabilities/AvailabilityItem";
import ReferenceItem from "./references/ReferenceItem";
import { Colors } from "react-native-ui-lib";
import ExperienceModal from "./experiences/ExperienceModal";
import axios from "axios";
import {
  Availability,
  Experience,
  Profile,
  Reference,
} from "../misc/interfaces";
import ReferenceModal from "./references/ReferenceModal";
import AvailabilityModal from "./availabilities/AvailabilityModal";
import axiosInstance from "../misc/api";

export default function ProfileScreen() {
  const [profile, setProfile] = useState({
    name: "Mike",
    surname: "John",
    email: "mike.john@hotmail.com",
    dateOfBirth: "11/02/2002",
    gender: "Male",
    phone: "0782346517",
    address: "24 rue des hospices, Montpellier, France",
    description: "Ceci est ma description",
    ratings: [
      { rating: 4.5, ratingComment: "test" },
      { rating: 4.0, ratingComment: "test2" },
    ],
    experiences: [
      {
        position: "Stagiaire",
        company: "test",
        startDate: "10/04/22",
        endDate: "10/04/22",
        descriptions: "test",
      },
    ],
    references: [
      {
        name: "Mike arlay",
        position: "Stagiaire",
        email: "10/04/22",
        phone: "10/04/22",
      },
    ],
    availabilities: [
      {
        fromDate: "02/09/22",
        toDate: "02/10/22",
      },
    ],
  });

  useEffect(async () => {
    const profile = axiosInstance
      .get("/profile/me")
      .then((response) => {
        setProfile(response.data);
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const [refVisible, setRefVisible] = useState(false);
  const [availVisible, setAvailVisible] = useState(false);
  const [expVisible, setExpVisible] = useState(false);

  const showRefModal = () => setRefVisible(true);
  const hideRefModal = () => setRefVisible(false);

  const showAvailModal = () => setAvailVisible(true);
  const hideAvailModal = () => setAvailVisible(false);

  const showExpModal = () => setExpVisible(true);
  const hideExpModal = () => setExpVisible(false);

  const handleAddReference = (reference: Reference) => {
    if (profile.references) {
      const updatedReferences = [...profile.references, reference];
      setProfile({ ...profile, references: updatedReferences });
    }
  };

  const handleAddAvail = (availability: Availability) => {
    if (profile.availabilities) {
      const updatedAvail = [...profile.availabilities, availability];
      setProfile({ ...profile, availabilities: updatedAvail });
    }
  };

  const handleAddExp = (experience: Experience) => {
    if (profile.experiences) {
      const updatedExp = [...profile.experiences, experience];
      setProfile({ ...profile, experiences: updatedExp });
    }
  };

  const handleDeleteReference = (index: number) => {
    const updatedReferences = [...profile.references];
    updatedReferences.splice(index, 1);
    setProfile({ ...profile, references: updatedReferences });
  };

  const handleDeleteAvail = (index: number) => {
    const updatedAvail = [...profile.availabilities];
    updatedAvail.splice(index, 1);
    setProfile({ ...profile, availabilities: updatedAvail });
  };

  const handleDeleteExp = (index: number) => {
    const updatedExp = [...profile.experiences];
    updatedExp.splice(index, 1);
    setProfile({ ...profile, experiences: updatedExp });
  };

  const handleSaveProfile = async (profile: Profile) => {
    try {
      const response = await axios.put("$BASE_URL/profile/me", profile);
    } catch {
      console.error(Error);
    }
  };

  const handleDeleteProfile = async () => {
    const response = await axios.delete("$BASE_URL/profile/me");
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <ProfileInfos profile={profile} />
        <View style={styles.ratingContainer}>
          <Title>Profile Rating</Title>
          {profile.ratings.map((rating, index) => (
            <RatingItem key={index} rating={rating}></RatingItem>
          ))}
        </View>
        <View style={styles.experienceContainer}>
          <Title>Previous Working Experience</Title>
          <IconButton
            icon="plus"
            iconColor={Colors.blue1}
            size={20}
            onPress={showExpModal}
          />
          {profile.experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              experience={experience}
              handleDeleteExp={handleDeleteExp}
            />
          ))}
        </View>
        <Divider style={styles.divider} />
        <View style={styles.referencesContainer}>
          <Title>References</Title>
          <IconButton
            icon="plus"
            iconColor={Colors.blue1}
            size={20}
            onPress={showRefModal}
          />
          {profile.references.map((reference, index) => (
            <ReferenceItem
              key={index}
              reference={reference}
              handleDeleteReference={handleDeleteReference}
            />
          ))}
        </View>
        <Divider style={styles.divider} />
        <View style={styles.availabilityContainer}>
          <Title>Availability</Title>
          <IconButton
            icon="plus"
            iconColor={Colors.blue1}
            size={20}
            onPress={showAvailModal}
          />
          {profile.availabilities.map((slot, index) => (
            <AvailabilityItem
              key={index}
              availability={slot}
              handleAddAvail={handleAddAvail}
              handleDeleteAvail={handleDeleteAvail}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            buttonColor="blue"
            onPress={() => {
              handleSaveProfile;
            }}
          >
            Save profile
          </Button>
          <Button
            mode="contained"
            buttonColor="red"
            onPress={() => {
              handleDeleteProfile;
            }}
          >
            Delete Profile
          </Button>
        </View>
      </ScrollView>
      <ExperienceModal
        visibility={expVisible}
        handleAddExp={handleAddExp}
        hideExpModal={hideExpModal}
      />
      <ReferenceModal
        visibility={refVisible}
        handleAddReference={handleAddReference}
        hideRefModal={hideRefModal}
      />
      <AvailabilityModal
        visibility={availVisible}
        handleAddAvail={handleAddAvail}
        hideAvailModal={hideAvailModal}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    paddingVertical: 20,
  },
  ratingContainer: {
    alignItems: "flex-start",
    width: "90%",
    marginBottom: 20,
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
  experienceContainer: {
    width: "90%",
  },
  referencesContainer: {
    width: "90%",
  },
  availabilityContainer: {
    width: "90%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 20,
  },
});
