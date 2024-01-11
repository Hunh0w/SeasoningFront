import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Linking } from "react-native";

import { Avatar, Divider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View, Text, Drawer, LoaderScreen } from "react-native-ui-lib";

// TEMPORARY (fetch json for employers)
import data from "../../employers.json";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface Employer {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  company: string;
  email: string;
}

type Props = {
  employer: Employer;
};

export function Employer({ employer }: Props) {
  const sendMessage = (employer: Number) => {
    // TODO : API Call to open a new conversation between U and employer
    // TODO : redirect to messages tab
  };

  return (
    <>
      <Drawer>
        <View
          bg-white
          style={{
            height: 80,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ marginHorizontal: 10 }}>
            <Avatar.Image size={50} source={{ uri: employer.avatar }} />
          </View>

          <View style={{ display: "flex", justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold" }}>
              {employer.surname} {employer.name}
            </Text>
            <Text style={{ width: 180 }}>{employer.company}</Text>
          </View>
          <View style={{ display: "flex", justifyContent: "center" }}>
            <MaterialCommunityIcons
              onPress={() => {
                sendMessage(employer.id);
              }}
              name="message-arrow-right"
              color="#291efc"
              size={26}
            />
          </View>
          <View
            style={{ display: "flex", justifyContent: "center", padding: 20 }}
          >
            <MaterialCommunityIcons
              onPress={() => {
                Linking.openURL("mailto:" + employer.email);
              }}
              name="mail"
              color="#291efc"
              size={32}
            />
          </View>
        </View>
        <Divider />
      </Drawer>
    </>
  );
}

export default function EmployersScreen() {
  const [employers, setEmployers] = useState(data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO : API Call to retrieve employers from json file
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <LoaderScreen message="Loading..." overlay />}
      {!loading && (
        <GestureHandlerRootView>
          <ScrollView>
            {employers.map((employer, index) => (
              <Employer key={index} employer={employer} />
            ))}
          </ScrollView>
        </GestureHandlerRootView>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
