import { StyleSheet, View, Text, Button } from 'react-native';

// Landing screen (1st screen of the app)
export default function LandingScreen({ navigation }: {navigation: any}) {
  // TODO : Change navigation type to correct one !
  return (
    <View style={styles.landingPage}>
       {/* TODO : Add logo, text and button for signIn & signUp */}
      <Text>Welcome to the App</Text>
      <Button title="Get Started" onPress={() => navigation.navigate("Signin")} />
    </View>
  );
}

const styles = StyleSheet.create({
  landingPage: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 10,
  }
});
