import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import { useDimensions } from "@react-native-community/hooks";
import React, { useState, useEffect } from "react";

export default function App() {
  // image
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    console.log("in pickImage");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // show dimensions
  console.log(useDimensions().screen);
  const handlePress = () => console.log("Pressed again.");
  return (
    // SafeAreaView is used to prevent going into the notches of phone screens
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Button
          title="Pick Images again"
          onPress={() => {
            //Alert.alert("Pressed");
            console.log("pressed Button");
            pickImage();
          }}
        />
        <View style={styles.image}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: 200,
                height: 200,
                borderRadius: 10,
                borderWidth: 3,
                borderColor: "grey",
              }}
            />
          )}
        </View>

        <View style={styles.row} />

        <View style={styles.row2} />
      </View>
    </SafeAreaView>
  );
}

// NOTE that .create will do validation of the object created as a Style type object
// - if you don't use the validator then any mispelling of the properties will go unnoticed
//   and compiles fine, resulting in very tough debugging
const styles = StyleSheet.create({
  button: {
    textDecorationColor: "red",
    backgroundColor: "blue",
  },
  view: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  image: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    backgroundColor: "tomato",
    flex: 1,
  },
  row2: {
    backgroundColor: "gold",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
