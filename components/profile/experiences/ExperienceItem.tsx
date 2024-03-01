import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ExperienceItem = ({ experience, handleDeleteExp }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{experience.position}</Text>
      <Text>{experience.company}</Text>
      <Text style={styles.date}>
        {experience.startDate} - {experience.endDate}
      </Text>
      <View style={styles.crossContainer}>
        <TouchableOpacity onPress={(e) => handleDeleteExp(e)}>
          <MaterialCommunityIcons name="close" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontStyle: "italic",
  },
  crossContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
  },
});

export default ExperienceItem;
