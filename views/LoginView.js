import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Firebase from "../firebase";

const auth = Firebase.auth();

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };

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
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignup}
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

// NOTE that .create will do validation of the object created as a Style type object
// - if you don't use the validator then any mispelling of the properties will go unnoticed
//   and compiles fine, resulting in very tough debugging
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