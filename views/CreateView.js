import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import { useDimensions } from "@react-native-community/hooks";
import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import { logout, getCurrentUser } from "../firebase";
import { useNavigation } from "@react-navigation/native";
//import DatePicker from "react-native-date-picker";
//import DateTimePicker from "@react-native-community/datetimepicker";

export default function CreateView() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [image, setImage] = useState(null);
  const [event, onChangeEvent] = useState(null);
  const [datetime, setDatetime] = useState(new Date());
  const [location, onChangeLocation] = useState(null);

  // show dimensions
  console.log(useDimensions().screen);

  const navigation = useNavigation();

  // boilerplate for getting camera permissions
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onSubmit = () => {
    Alert.alert("You submitted!");
  };

  const getCurrDate = () => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var date = new Date().getDate();
    var month = monthNames[new Date().getMonth()];
    var year = new Date().getFullYear();
    return date + " " + month + " " + year;
  };

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

  return (
    // SafeAreaView is used to prevent going into the notches of phone screens
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Camera style={styles.camera} type={type}>
          <TouchableOpacity
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          >
            <Image
              source={require("../assets/flip_48px.png")}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Alert.alert("Clicked Camera!");
            }}
          >
            <Image
              source={require("../assets/cam_48px.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </Camera>
        <Button
          style={styles.button}
          title="Pick photo again..."
          onPress={() => {
            pickImage();
          }}
        />
        {image && (
          // TODO think about how to convert this to a button
          <Image
            source={{ uri: image }}
            style={{
              width: "70%",
              height: "70%",
              borderRadius: 10,
              borderWidth: 3,
              borderColor: "grey",
            }}
          />
        )}
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>What?</Text>
          <TextInput
            padding={6}
            style={styles.input}
            onChangeText={onChangeEvent}
            value={event}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>Where?</Text>
          <TextInput
            padding={6}
            style={styles.input}
            onChangeText={onChangeLocation}
            value={location}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>When?</Text>
          <Text style={styles.inputDate}>{getCurrDate()}</Text>
        </View>
      </View>
      <TouchableHighlight
        style={styles.submit}
        activeOpacity={0.7}
        underlayColor="lightcoral"
        onPress={onSubmit}
      >
        <Text style={{ fontSize: 25 }}>SUBMIT</Text>
      </TouchableHighlight>

      <Button
        style={styles.button}
        onPress={() => {
          logout(() => {
            navigation.replace("Login");
          });
        }}
        title="Logout"
      />
      <Text
        style={{ fontWeight: "600", textAlign: "center", color: "dodgerblue" }}
      >
        {getCurrentUser?.email}
      </Text>
    </SafeAreaView>
  );
}

// NOTE that .create will do validation of the object created as a Style type object
// - if you don't use the validator then any mispelling of the properties will go unnoticed
//   and compiles fine, resulting in very tough debugging
const styles = StyleSheet.create({
  button: {
    textDecorationColor: "red",
    color: "black",
  },
  imageContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 3,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
  },
  inputRow: {
    height: 70,
    padding: 10,
    margin: 10,
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
  inputDate: { flex: 4, marginLeft: 10, fontSize: 20 },
  input: {
    flex: 4,
    marginLeft: 10,
    height: 50,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 15,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "pink",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  submit: {
    flex: 0.5,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  icon: { width: 48, tintColor: "grey" },
});
