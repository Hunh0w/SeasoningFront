import React, { useState } from "react";
import { Modal, TextInput, Button, Title } from "react-native-paper";

export default function ExperienceModal({
  visibility,
  hideExpModal,
  handleAddExp,
}: any) {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handlePositionChange = (text: string) => setPosition(text);
  const handleCompanyChange = (text: string) => setCompany(text);
  const handleStartDateChange = (text: string) => setStartDate(text);
  const handleEndDateChange = (text: string) => setEndDate(text);

  const handleSubmit = () => {
    handleAddExp({ position, company, startDate, endDate });
    hideExpModal();
  };

  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <>
      <Modal visible={visibility} onDismiss={hideExpModal} contentContainerStyle={containerStyle}>
        <Title>Working Experience</Title>
        <TextInput
          label="Position"
          value={position}
          onChangeText={handlePositionChange}
        />
        <TextInput
          label="Company"
          value={company}
          onChangeText={handleCompanyChange}
        />
        <TextInput
          label="Start date"
          value={startDate}
          onChangeText={handleStartDateChange}
        />
        <TextInput
          label="End date"
          value={endDate}
          onChangeText={handleEndDateChange}
        />
        <Button onPress={handleSubmit}>Submit</Button>
      </Modal>
    </>
  );
}
