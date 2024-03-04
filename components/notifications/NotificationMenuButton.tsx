import { useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";

// Notification button to show missed notifications
export default function NotificationMenuButton() {
  const navigation = useNavigation();

  const handleNotificationsView = () => {
    navigation.navigate("Notifications")
  }
  return (
    <>
      <IconButton icon="message-alert" onPress={handleNotificationsView}></IconButton>
    </>
  );
}
