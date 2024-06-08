import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function AppScreen({ navigation }) {

  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({ });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
    setUsername("");
   })
  })

const handleLogin = () => {
    if (!username) {
      setErrors({ username: "Username cannot be empty" });
    } else {
      setErrors({});
      navigation.navigate("About", { name: username });
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.text}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername} />
        {
           errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null
        }

     {/*<Button style={styles.button}
        title="Login"
        //onPress={() => navigation.navigate("About",  { name: username })}
        onPress={handleLogin}
      />*/}
     <TouchableOpacity 
        style={{ borderRadius: 7, backgroundColor: '#147EFB', padding: 10 }}
        onPress={handleLogin}>
        <Text style={{ color: '#fff' }}>Login</Text>
      </TouchableOpacity>
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
  errorText: {
    fontSize: 24,
    color: "red",
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 12,
  },
  input: {
    padding: 12,
    marginBottom: 18,
    fontSize: 14
  },
  button: {
    marginTop: 10
  }
});