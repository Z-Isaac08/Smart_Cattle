import { Text, View } from "react-native";
import { Human } from "./components/Human/Human";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import SignUp from "./screens/SignUp/SignUp";
import Home from "./screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
