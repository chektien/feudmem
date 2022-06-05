import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
//import DatePicker from "react-native-date-picker";
//import DateTimePicker from "@react-native-community/datetimepicker";

export default function LoginView() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="username" />
        <TextInput
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
          onPress={() => {}}
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
    fontWeight: "500",
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
