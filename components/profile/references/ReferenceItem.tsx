import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, Title, Card } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ReferenceItem({ reference, handleDeleteReference }: any) {
  return (
    <Card style={styles.referenceCard}>
      <Card.Content>
        <Title>{reference.name}</Title>
        <Text>{reference.position}</Text>
        <Text>Email: {reference.email}</Text>
        <Text>Phone: {reference.phone}</Text>
        <View style={styles.crossContainer}>
          <TouchableOpacity onPress={handleDeleteReference}>
            <MaterialCommunityIcons name="close" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </Card.Content>
    </Card>
  );
}
const styles = StyleSheet.create({
  referenceCard: {
    marginBottom: 10,
  },
  crossContainer: {
    position: "absolute",
    top: 50,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
  },
});
