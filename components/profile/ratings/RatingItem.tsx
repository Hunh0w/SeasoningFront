import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";
import StarRating from "./StarsRating";

export default function RatingItem({ rating }) {
  return (
    <>
      <View style={styles.ratingItem}>
        <Text style={styles.ratingSubject}>Rating: </Text>
        <StarRating rating={rating.rating} />
      </View>
      <View style={styles.ratingItem}>
        <Text style={styles.ratingSubject}>Comment: </Text>
        <Text style={styles.ratingComment}>{rating.ratingComment}</Text>
      </View>
      <Divider style={styles.divider} />
    </>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 2,
    width: "90%",
    backgroundColor: "#ccc",
    marginBottom: 20,
  },
  ratingItem: {
    flexDirection: "row",
    marginBottom: 10,
  },
  ratingSubject: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ratingValue: {
    fontSize: 16,
  },
  ratingComment: {
    fontSize: 16,
    flexShrink: 1,
  },
});
