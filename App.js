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

// directly declare and export an App component
// - whatever is exported will be shown on the screen?
export default function App() {
  let count = 1;
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "#777", fontSize: 20 }}>What I ate...</Text>
      </View>

      <ScrollView>
        <View>
          <Text> This is a scrollview. </Text>
          <Image
            source={require("./assets/icon1.png")}
            style={{ width: 200, height: 200, marginBottom: 10 }}
          />
          <TextInput
            style={{
              height: 40,
              padding: 10,
              borderColor: "gray",
              borderWidth: 2,
            }}
            defaultValue="Type here"
          />
        </View>
        <Repeater count={count++} />
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 50,
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
}


