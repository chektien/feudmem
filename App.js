import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View>
        <Image
          source={require("./assets/icon1.png")}
          style={{ width: 200, height: 200, marginBottom: 10 }}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Event</Text>
        <TextInput style={styles.input} defaultValue="Type here" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  formRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  label: {
    padding: 12,
    fontSize: 18,
    height: 20,
  },
  input: {
    padding: 10,
    fontSize: 18,
    borderColor: "gray",
    borderWidth: 1,
  },
});

const Repeater = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text> Hello repeater world {props.count}? </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        title={isHungry ? "Gimme feud" : "Full liao lah"}
      />
    </View>
  );
};
