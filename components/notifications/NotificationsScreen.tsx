import { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import { Divider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View, Text, Drawer, LoaderScreen } from "react-native-ui-lib";

interface Notification {
  id: number;
  title: string;
  subtitle: string;
  text: string;
}

type Props = {
  notification: Notification;
};

export function Notification({ notification }: Props) {
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
          <View style={{ display: "flex", justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold" }}>
              {notification.title}
            </Text>
            <Text style={{ width: 180 }}>{notification.subtitle}</Text>
          </View>
        </View>
        <Divider />
      </Drawer>
    </>
  );
}

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState([{title: "test", subtitle:"test"}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO : API Call to retrieve notifications
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <LoaderScreen message="Loading..." overlay />}
      {!loading && (
        <GestureHandlerRootView>
          <ScrollView>
            {notifications.map((notification, index) => (
              <Notification key={index} notification={notification} />
            ))}
          </ScrollView>
        </GestureHandlerRootView>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
