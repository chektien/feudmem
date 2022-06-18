import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { createMem } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../firebase";

export default function MemoryView() {
  const navigation = useNavigation();
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    //db.collection("memories")
    ////.onSnapshot()
    //.get()
    //.then((result) => {
    //result.docs;
    //})
    //.then((docs) => {
    //console.log("received results:", docs);
    //docs.map((doc) => ({ id: doc.data().id, title: doc.data().title }));
    //});

    // TODO remove this debug adding of record in db
    createMem();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.inputTitle]}>Memories...</Text>

      {memories?.map((memory) => (
        <View style={styles.memoryItem}>
          <Text>{memory.title}</Text>
        </View>
      ))}
      <Button
        style={styles.buttonText}
        onPress={() => {
          navigation.replace("Home");
        }}
        title="Create"
      />
      <Button
        style={styles.buttonText}
        onPress={() => {
          logout(() => {
            navigation.replace("Login");
          });
        }}
        title="Logout"
      />
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
  memoryItem: {
    textAlign: "left",
    color: "blue",
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
