import React, { useState } from "react";
import { Modal, TextInput, Button, Title } from "react-native-paper";

export default function ReferenceModal({
  visibility,
  hideRefModal,
  handleAddReference,
}: any) {
const [name, setName] = useState("");
const [position, setPosition] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");

const handleNameChange = (text: string) => setName(text);
const handlePositionChange = (text: string) => setPosition(text);
const handlePhoneChange = (text: string) => setPhone(text);
const handleEmailChange = (text: string) => setEmail(text);

const handleSubmit = () => {
  handleAddReference({ name, position, phone, email });
  hideRefModal();
};

const containerStyle = {backgroundColor: 'white', padding: 20};

return (
  <>
    <Modal visible={visibility} onDismiss={hideRefModal} contentContainerStyle={containerStyle}>
      <Title>Working Experience</Title>
      <TextInput
        label="Name"
        value={name}
        onChangeText={handleNameChange}
      />
      <TextInput
        label="Position"
        value={position}
        onChangeText={handlePositionChange}
      />
      <TextInput
        label="Phone"
        value={phone}
        onChangeText={handlePhoneChange}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <Button onPress={handleSubmit}>Submit</Button>
    </Modal>
  </>
);
}