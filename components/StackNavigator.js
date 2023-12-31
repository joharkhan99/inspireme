import { createStackNavigator } from "@react-navigation/stack";
import Categories from "./Categories";
import Quotes from "./Quotes";
import { LinearGradient } from "expo-linear-gradient";
import Home from "./Home";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Quotes" component={Quotes} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
