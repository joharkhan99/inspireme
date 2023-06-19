import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Categories from "./components/Categories";
import StackNavigator from "./components/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
