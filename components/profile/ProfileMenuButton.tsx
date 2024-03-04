import { useState } from "react";
import { Divider, IconButton, Menu } from "react-native-paper";

// Store related
import { setUserConnected } from "../../store/user";
import { useDispatch } from "react-redux";
import { handleLogout } from "../../auth/sso";
import { storeToken } from "../../auth/storeToken";
import { useAutoDiscovery } from "expo-auth-session";
import { useNavigation } from "@react-navigation/native";

// Profile button to go to profile tab or sign out
export default function ProfileMenuButton() {
  // TODO : find a way to show a clickable <Avatar>

  const [profileMenuVisible, setProfileMenuVisible] = useState(false);
  const openMenu = () => setProfileMenuVisible(true);
  const closeMenu = () => setProfileMenuVisible(false);
  const dispatch = useDispatch();

  const discovery =
    useAutoDiscovery("https://auth.araimbault.com/realms/seasoning" ?? "") ||
    "";
  const navigation = useNavigation();

  const handleProfileView = () => {
    navigation.navigate("Profile");
    closeMenu();
  };

  const handleUserSignOut = async () => {
    const { getToken } = storeToken();
    const token = await getToken();
    await handleLogout(discovery, token);
    dispatch(setUserConnected(false));
  };

  return (
    <Menu
      visible={profileMenuVisible}
      onDismiss={closeMenu}
      anchor={<IconButton icon="account" onPress={openMenu} />}
    >
      <Menu.Item onPress={handleProfileView} title="My Profile" />
      <Divider />
      <Menu.Item onPress={handleUserSignOut} title="Sign out" />
    </Menu>
  );
}
