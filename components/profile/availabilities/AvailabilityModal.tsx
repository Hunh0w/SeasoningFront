import React, { useState } from "react";
import { Modal, TextInput, Button, Title } from "react-native-paper";

export default function AvailabilityModal({
  visibility,
  hideAvailModal,
  handleAddAvail,
}: any) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (text: string) => setStartDate(text);
  const handleEndDateChange = (text: string) => setEndDate(text);

  const handleSubmit = () => {
    handleAddAvail({ startDate, endDate });
    hideAvailModal();
  };
  
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <>
      <Modal visible={visibility} onDismiss={hideAvailModal} contentContainerStyle={containerStyle}>
        <Title>Add availability</Title>
        <TextInput
          label="From"
          value={startDate}
          onChangeText={handleStartDateChange}
        />
        <TextInput
          label="To"
          value={endDate}
          onChangeText={handleEndDateChange}
        />
        <Button onPress={handleSubmit}>Submit</Button>
      </Modal>
    </>
  );
}
