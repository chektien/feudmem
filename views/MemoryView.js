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
import { createMem, fetchAllMem, memoryRef } from "../firebase";
import { getDocs } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../firebase";

export default function MemoryView() {
  const navigation = useNavigation();
  const [memories, setMemories] = useState([]);

  //testing
  const [num, setNum] = useState(0);
  console.log("num is ", num);

  const updateNum = () => {
    const newNum = num + 1;
    console.log("updating num", newNum);
    setNum(newNum);
  };

  //fetch the returned snapshot from query to firestore
  const fetchAllMem = async () => {
    console.log("fetching memories...");
    const querySnapshot = await getDocs(memoryRef);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });

    // convert the list of query snapshots into a regular javascript array containing only the title
    const allMemories = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
    }));
    //const allMemories = querySnapshot.docs.map(doc => doc.data().title)

    // see what is the last item
    console.log(allMemories[allMemories.length - 1]);

    // store the array as a persistent state variable
    setMemories(allMemories);
  };

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

    // fetch all memories
    fetchAllMem();

    //querySnapshot.forEach((doc) => {
    //console.log(doc.id, " => ", doc.data())
    //})
  }, []);

  // NOTE the key attrib that is needed for each child item created from a jsx array
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.inputTitle]}>Memories...</Text>

      {memories.map((memory) => (
        <View key={memory.id} style={styles.memoryItem}>
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
      <ActualTestComp num={num} updateNum={updateNum}></ActualTestComp>
    </SafeAreaView>
  );
}

// TESTING
//function TestComp(props) {
//return (
//<ActualTestComp
//num={props.num}
//updateNum={props.updateNum}
//></ActualTestComp>
//);
//}

function ActualTestComp(props) {
  const debugClick = () => {
    props.updateNum();
    console.log("inTestComp num is ", props.num);
  };
  return (
    <SafeAreaView>
      <button onClick={debugClick}> INCREMENT </button>
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
