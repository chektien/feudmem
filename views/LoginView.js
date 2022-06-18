/**
 * The Login Screen.
 * Any change in the TextInputs will set the email and password states.
 * Then clicking the buttons will trigger the onPress lambdas that call into
 * the API from firebase.js
 */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { login, register, loginStatus } from "../firebase"; // our own lib

export default function LoginView() {
  // init the navigation system that interacts with stack.screens
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Jump to home if user is already logged in.
   * - pass in lambda observer to subscribe to the AuthState, that will navigate
   *   to home once detect user login
   * - return unsubscribe (returned from loginStatus) as the cleanup function
   *   which will unsubscribe the observer from the AuthState broadcaster
   * - pass in [] for 2nd arg so that the effect is re-ran every time
   *   if e.g., pass in [user.uid], then the effect will only run when user.uid changes
   */
  useEffect(() => {
    const unsubscribe = loginStatus((user) => {
      if (user) {
        console.log("Detected user already logged in with id ", user.uid);
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
