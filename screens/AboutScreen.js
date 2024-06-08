import { View, Text, Button, StyleSheet } from "react-native";

export default function AboutScreen({ navigation, route }) {

const handleLogout = () => {
    let proceed = confirm("Are you sure you want to logout?");
    if(proceed)
        navigation.navigate("Home");
    };

    return (
    <View style={styles.container}>
    <Text style={styles.text}>Hello { route.params?.name }, you are logged in!!</Text>
     <Button
        title="Logout"
        onPress={handleLogout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

