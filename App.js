import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Button
} from "react-native";

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
}

// directly declare and export an App component
// - whatever is exported will be shown on the screen?
export default function App() {
    let count = 1;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text> This is a scrollview. </Text>
          <Image
            source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
            style={{ width: 200, height: 200 }}
          />
          <TextInput
            style={{
              height: 40,
              padding: 5,
              borderColor: "gray",
              borderWidth: 2,
            }}
            defaultValue="Type here"
          />
        </View>
        <View style={styles.container}>
          <Text style={{ color: "#999", fontSize: 18 }}>
            Hello, javascript react world again.
          </Text>
          <StatusBar style="auto" />
        </View>
        <Repeater count={count++} />
        <Repeater count={count++} />
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 3,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
