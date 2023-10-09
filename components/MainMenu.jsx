import * as React from "react";
import { Button, View } from "react-native";

export default function MainMenu( { navigation } ) {
  return (
    <View>
      <Button
        title="Offres"
        onPress={() => navigation.navigate("Offres")}
      />
      <Button
        title="Employeurs"
        onPress={() => navigation.navigate("Employeurs")}
      />
      <Button
        title="Messages"
        onPress={() => navigation.navigate("Messsages")}
      />
    </View>
  );
}
