import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginView from "./views/LoginView";
import CreateView from "./views/CreateView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={CreateView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
    borderRadius: "15",
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
