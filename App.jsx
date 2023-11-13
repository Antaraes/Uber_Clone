import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import ReduxProvider from "./redux/provider";
import { HomeScreen } from "./src/screens/HomeScreen";
import { MapScreen } from "./src/screens/MapScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ReduxProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
          </Stack.Navigator>
          {/* <HomeScreen /> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </ReduxProvider>
  );
}
