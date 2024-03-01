import React, { useCallback, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Card, IconButton } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function AvailabilityItem({ availability, handleDeleteAvail }: any) {
  const [range, setRange] = useState<any>({
    startDate: undefined,
    endDate: undefined,
  });
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const onDismiss = useCallback(() => {
    setDatePickerOpen(false);
  }, [setDatePickerOpen]);

  const onConfirm = useCallback(
    ({ startDate, endDate }: any) => {
      setDatePickerOpen(false);
      setRange({ startDate, endDate });
    },
    [setDatePickerOpen, setRange]
  );

  const dateToString = (date: Date) => {
    return date.toLocaleDateString("fr-FR");
  };

  const startDateString =
    range.startDate == undefined ? "?" : dateToString(range.startDate);
  const endDateString =
    range.endDate == undefined ? "?" : dateToString(range.endDate);

  return (
    <Card style={styles.availabilityCard}>
      <Card.Content style={styles.availabilityCardContent}>
        <View style={styles.availabilityIcon}>
          <IconButton
            icon={"calendar"}
            onPress={() => setDatePickerOpen(true)}
          />
        </View>
        <View style={styles.availabilityDetails}>
          <Text>
            From: {startDateString} - {endDateString}
          </Text>
        </View>
        <TouchableOpacity onPress={handleDeleteAvail}>
          <MaterialCommunityIcons name="close" size={24} color="red" />
        </TouchableOpacity>
      </Card.Content>
      <DatePickerModal
        locale="fr"
        mode="range"
        visible={datePickerOpen}
        onDismiss={onDismiss}
        startDate={range.startDate}
        endDate={range.endDate}
        onConfirm={onConfirm}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  availabilityCard: {
    marginBottom: 10,
  },
  availabilityCardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  availabilityIcon: {
    marginRight: 10,
  },
  availabilityDetails: {
    flex: 1,
  },
  availabilityDay: {
    fontWeight: "bold",
  },
});
