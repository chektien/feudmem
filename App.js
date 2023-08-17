import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginView from "./views/LoginView";
import CreateView from "./views/CreateView";
import MemoryView from "./views/MemoryView";
import TestView from "./views/TestView";

// init the stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Test"
          component={TestView}
          options={{ headerShown: false }}
        />
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
        <Stack.Screen
          name="Memory"
          component={MemoryView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
