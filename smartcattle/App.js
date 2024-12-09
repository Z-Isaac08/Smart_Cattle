import { Text, View } from "react-native";
import { Human } from "./components/Human/Human";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "#2D6A4F", flex: 1 }}>
        <Text style={s.grandtitre}>Smartcattle</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
