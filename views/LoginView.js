import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { login, register, loginStatus, auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

//const auth = Firebase.auth();

export default function LoginView() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Jump to home if user is already logged in.
   */
  useEffect(() => {
    const unsubscribe = loginStatus((user) => {
      if (user) {
        navigation.navigate("Memory");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="username"
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          placeholder="password"
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            login(email, password);
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            register(email, password);
          }}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={[styles.buttonText, styles.buttonOutlineText]}>
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    marginTop: 30,
  },
  button: {
    textDecorationColor: "red",
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 22,
  },
  buttonOutline: {
    backgroundColor: "white",
    borderColor: "tomato",
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: "tomato",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    fontSize: 22,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  inputTitle: {
    flex: 1.5,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  },
});
